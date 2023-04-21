import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import NiftrNFT from "./NiftrNFT.json";

const niftrNFTAddress = "0xD1D54342d992c7fe54bdCa09A8270C24E09547cF";

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        niftrNFTAddress,
        NiftrNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(mintAmount);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
