// import Navbar from "./Navbar";
// import axie from "../tile.jpeg";
// import { useLocation, useParams } from 'react-router-dom';
// import MarketplaceJSON from "../Marketplace.json";
// import axios from "axios";
// import { useState } from "react";
// import { GetIpfsUrlFromPinata } from "../utils";

// export default function NFTPage (props) {

// const [data, updateData] = useState({});
// const [dataFetched, updateDataFetched] = useState(false);
// const [message, updateMessage] = useState("");
// const [currAddress, updateCurrAddress] = useState("0x");

// async function getNFTData(tokenId) {
//     const ethers = require("ethers");
//     //After adding your Hardhat network to your metamask, this code will get providers and signers
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const addr = await signer.getAddress();
//     //Pull the deployed contract instance
//     let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
//     //create an NFT Token
//     var tokenURI = await contract.tokenURI(tokenId);
//     const listedToken = await contract.getListedTokenForId(tokenId);
//     tokenURI = GetIpfsUrlFromPinata(tokenURI);
//     let meta = await axios.get(tokenURI);
//     meta = meta.data;
//     console.log(listedToken);

//     let item = {
//         price: meta.price,
//         tokenId: tokenId,
//         seller: listedToken.seller,
//         owner: listedToken.owner,
//         image: meta.image,
//         name: meta.name,
//         description: meta.description,
//     }
//     console.log(item);
//     updateData(item);
//     updateDataFetched(true);
//     console.log("address", addr)
//     updateCurrAddress(addr);
// }

// async function buyNFT(tokenId) {
//     try {
//         const ethers = require("ethers");
//         //After adding your Hardhat network to your metamask, this code will get providers and signers
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();

//         //Pull the deployed contract instance
//         let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
//         const salePrice = ethers.utils.parseUnits(data.price, 'ether')
//         updateMessage("Buying the NFT... Please Wait (Upto 5 mins)")
//         //run the executeSale function
//         let transaction = await contract.executeSale(tokenId, {value:salePrice});
//         await transaction.wait();

//         alert('You successfully bought the NFT!');
//         updateMessage("");
//     }
//     catch(e) {
//         alert("Upload Error"+e)
//     }
// }

//     const params = useParams();
//     const tokenId = params.tokenId;
//     if(!dataFetched)
//         getNFTData(tokenId);
//     if(typeof data.image == "string")
//         data.image = GetIpfsUrlFromPinata(data.image);

//     return(
//         <div style={{"min-height":"100vh"}}>
//             <Navbar></Navbar>
//             <div className="flex ml-20 mt-20">
//                 <img src={data.image} alt="" className="w-2/5" />
//                 <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
//                     <div>
//                         Name: {data.name}
//                     </div>
//                     <div>
//                         Description: {data.description}
//                     </div>
//                     <div>
//                         Price: <span className="">{data.price + " ETH"}</span>
//                     </div>
//                     <div>
//                         Owner: <span className="text-sm">{data.owner}</span>
//                     </div>
//                     <div>
//                         Seller: <span className="text-sm">{data.seller}</span>
//                     </div>
//                     <div>
//                     { currAddress != data.owner && currAddress != data.seller ?
//                         <button className="enableEthereumButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={() => buyNFT(tokenId)}>Buy this NFT</button>
//                         : <div className="text-emerald-700">You are the owner of this NFT</div>
//                     }
                    
//                     <div className="text-green text-center mt-3">{message}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { ethers } from "ethers";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage() {
  const { tokenId } = useParams();
  const [data, updateData] = useState({});
  const [dataFetched, updateDataFetched] = useState(false);
  const [message, updateMessage] = useState("");
  const [currAddress, updateCurrAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch NFT data
  useEffect(() => {
    async function getNFTData(tokenId) {
      try {
        // Validate tokenId
        if (!tokenId) {
          setError('Token ID is missing.');
          setLoading(false);
          return;
        }

        const parsedTokenId = parseInt(tokenId, 10);
        if (isNaN(parsedTokenId)) {
          setError('Invalid Token ID.');
          setLoading(false);
          return;
        }

        // Check if MetaMask is installed
        if (typeof window.ethereum === 'undefined') {
          setError('MetaMask is not installed. Please install MetaMask to use this feature.');
          setLoading(false);
          return;
        }

        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        updateCurrAddress(addr);

        // Connect to the smart contract
        const contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);

        // Fetch tokenURI and listedToken data
        let tokenURI = await contract.tokenURI(parsedTokenId);
        console.log('Token URI:', tokenURI);

        const listedToken = await contract.getListedTokenForId(parsedTokenId);
        console.log('Listed Token:', listedToken);

        if (!listedToken || !listedToken.seller || !listedToken.owner || !listedToken.price) {
          setError('Listed token data is incomplete.');
          setLoading(false);
          return;
        }

        // Convert IPFS URI to HTTP URL
        tokenURI = GetIpfsUrlFromPinata(tokenURI);
        console.log('Converted Token URI:', tokenURI);

        // Fetch metadata from tokenURI
        const metaResponse = await axios.get(tokenURI);
        const meta = metaResponse.data;
        console.log('Metadata:', meta);

        if (!meta || !meta.price || !meta.image) {
          setError('Metadata is incomplete.');
          setLoading(false);
          return;
        }

        // Ensure image URL is properly formatted
        let imageURL = meta.image;
        if (imageURL.startsWith('ipfs://')) {
          imageURL = GetIpfsUrlFromPinata(imageURL);
        }

        // Create NFT item object
        const item = {
          price: meta.price,
          tokenId: parsedTokenId,
          seller: listedToken.seller,
          owner: listedToken.owner,
          image: imageURL,
          name: meta.name,
          description: meta.description,
        };

        console.log('NFT Item:', item);

        // Update state with fetched data
        updateData(item);
        updateDataFetched(true);
      } catch (err) {
        console.error('Error fetching NFT data:', err);
        setError('Failed to fetch NFT data. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    if (!dataFetched && tokenId) {
      getNFTData(tokenId);
    }
  }, [dataFetched, tokenId]);

  // Function to handle buying NFT
  async function buyNFT(tokenId) {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        setError('MetaMask is not installed. Please install MetaMask to proceed.');
        return;
      }

      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Connect to the smart contract
      const contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);

      // Validate and parse sale price
      if (!data.price) {
        setError('Price is undefined.');
        return;
      }

      let salePrice;
      try {
        salePrice = ethers.utils.parseUnits(data.price, 'ether');
      } catch (err) {
        console.error('Invalid price format:', err);
        setError('Invalid price format.');
        return;
      }

      // Update message to indicate processing
      updateMessage("Buying the NFT... Please Wait (Up to 5 mins)");

      // Execute sale
      const transaction = await contract.executeSale(tokenId, { value: salePrice });
      await transaction.wait();

      // Notify user of success
      alert('You successfully bought the NFT!');
      updateMessage("");

      // Optionally, refresh data to reflect new ownership
      updateDataFetched(false);
    } catch (err) {
      console.error('Error buying NFT:', err);
      alert(`Error buying NFT: ${err.message}`);
      updateMessage("");
    }
  }

  // Helper function to truncate wallet address
  function truncateAddress(addr) {
    if (!addr) return '';
    return addr.substring(0, 6) + '...' + addr.substring(addr.length - 4);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl">Loading NFT data...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-red-500 text-2xl">{error}</p>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* NFT Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={data.image || 'https://via.placeholder.com/400'}
                alt={data.name || 'NFT Image'}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* NFT Details */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10">
              <h1 className="text-3xl font-bold mb-4">{data.name || 'Unnamed NFT'}</h1>
              <p className="mb-4">{data.description || 'No description available.'}</p>
              <div className="mb-4">
                <span className="font-semibold">Price:</span> {data.price} ETH
              </div>
              <div className="mb-4">
                <span className="font-semibold">Owner:</span> {truncateAddress(data.owner)}
              </div>
              <div className="mb-6">
                <span className="font-semibold">Seller:</span> {truncateAddress(data.seller)}
              </div>

              {/* Buy Button */}
              {currAddress.toLowerCase() !== data.owner.toLowerCase() &&
                currAddress.toLowerCase() !== data.seller.toLowerCase() ? (
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => buyNFT(data.tokenId)}
                >
                  Buy this NFT
                </button>
              ) : (
                <div className="text-emerald-500 font-semibold">
                  You are the owner of this NFT
                </div>
              )}

              {/* Message Display */}
              {message && (
                <div className="mt-4 text-center text-green-500">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}