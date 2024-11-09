// //require('dotenv').config();
// const key = "f05d488c7af9a12f7438";
// const secret = "80ad485bec4d4b8e54d9c4024de5207526d80b754add39f4c5a1ce79c00ebe0f";

// const axios = require('axios');
// const FormData = require('form-data');

// export const uploadJSONToIPFS = async(JSONBody) => {
//     const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
//     //making axios POST request to Pinata ⬇️
//     return axios 
//         .post(url, JSONBody, {
//             headers: {
//                 pinata_api_key: key,
//                 pinata_secret_api_key: secret,
//             }
//         })
//         .then(function (response) {
//            return {
//                success: true,
//                pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
//            };
//         })
//         .catch(function (error) {
//             console.log(error)
//             return {
//                 success: false,
//                 message: error.message,
//             }

//     });
// };

// export const uploadFileToIPFS = async(file) => {
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//     //making axios POST request to Pinata ⬇️
    
//     let data = new FormData();
//     data.append('file', file);

//     const metadata = JSON.stringify({
//         name: 'testname',
//         keyvalues: {
//             exampleKey: 'exampleValue'
//         }
//     });
//     data.append('pinataMetadata', metadata);

//     //pinataOptions are optional
//     const pinataOptions = JSON.stringify({
//         cidVersion: 0,
//         customPinPolicy: {
//             regions: [
//                 {
//                     id: 'FRA1',
//                     desiredReplicationCount: 1
//                 },
//                 {
//                     id: 'NYC1',
//                     desiredReplicationCount: 2
//                 }
//             ]
//         }
//     });
//     data.append('pinataOptions', pinataOptions);

//     return axios 
//         .post(url, data, {
//             maxBodyLength: 'Infinity',
//             headers: {
//                 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//                 pinata_api_key: key,
//                 pinata_secret_api_key: secret,
//             }
//         })
//         .then(function (response) {
//             console.log("image uploaded", response.data.IpfsHash)
//             return {
//                success: true,
//                pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
//            };
//         })
//         .catch(function (error) {
//             console.log(error)
//             return {
//                 success: false,
//                 message: error.message,
//             }

//     });
// };

// Import necessary modules
const axios = require('axios');
const FormData = require('form-data');

// Replace with your Pinata JWT
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwYTRhYWU2MS0wNzA1LTQ2ODktOGVhNC1kNjFkNWY0YzljYjkiLCJlbWFpbCI6ImFtYW5wYXJpaGFyMTI5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxOGRiM2E3ZTNhMWIwOGIyMGJhZiIsInNjb3BlZEtleVNlY3JldCI6ImM3NWI1NTY1MGFhZTAyODliYzI4Y2RkYzM4OTk4ZjMzNDE4OTI4ZjVlMzBjZmRhMzcxOTU2NGJjMjdmZDdlYTYiLCJleHAiOjE3NjI2MzcyNzV9.q38ZubglyQJW-XOWv-2d3aMs5SABUrTF31r-TYsysHA";

export const uploadJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  return axios
    .post(url, JSONBody, {
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};

export const uploadFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file);

  const metadata = JSON.stringify({
    name: 'testname',
    keyvalues: {
      exampleKey: 'exampleValue',
    },
  });
  data.append('pinataMetadata', metadata);

  // Pinata options are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  data.append('pinataOptions', pinataOptions);

  return axios
    .post(url, data, {
      maxBodyLength: 'Infinity',
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    })
    .then(function (response) {
      console.log("File uploaded:", response.data.IpfsHash);
      return {
        success: true,
        pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};