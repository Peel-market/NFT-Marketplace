

// export const GetIpfsUrlFromPinata = (pinataUrl) => {
//     var IPFSUrl = pinataUrl.split("/");
//     const lastIndex = IPFSUrl.length;
//     IPFSUrl = "https://gateway.pinata.cloud/ipfs/"+IPFSUrl[lastIndex-1];
//     return IPFSUrl;
// };


export const GetIpfsUrlFromPinata = (pinataUrl) => {
    let ipfsHash;
  
    // Regular expression to match IPFS hash
    const hashRegex = /(?:ipfs\/|ipfs:\/\/|\/)([a-zA-Z0-9]{46,})/;
  
    const match = pinataUrl.match(hashRegex);
  
    if (match && match[1]) {
      // Extracted hash
      ipfsHash = match[1];
  
      // Remove any query parameters or fragments
      ipfsHash = ipfsHash.split('?')[0].split('#')[0];
  
      // Construct the IPFS URL
      const IPFSUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
      return IPFSUrl;
    } else {
      console.error('Invalid pinataUrl:', pinataUrl);
      return null;
    }
  };