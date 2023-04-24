import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import NiftrNFT from "./NiftrNFT.json";
import "./styles/MainMint.scss";

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
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleDecrement = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1);
    }
  };

  const handleIncrement = () => {
    if (mintAmount < 3) {
      setMintAmount(mintAmount + 1);
    }
  };

  return (
    <div>
      <div className="hero">
        <div className="hero__item">
          <h1>Niftr</h1>
        </div>
        <div className="hero__item">
          <p>
            This collection has been produced to protect humanity from the evil
            of artificial intelligence. And all their income will be paid as
            ransom to artificial intelligence, and humanity will be protected
            for a while.
          </p>
        </div>
        {isConnected ? (
          <div className="hero__item mint">
            <div>
              <button className="btn-handle" onClick={handleDecrement}>
                -
              </button>
              <input
                className="input-mint"
                type="number"
                value={mintAmount}
                readOnly
              />
              <button className="btn-handle" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className="btn-mint btn-handle" onClick={handleMint}>
              Mint
            </button>
          </div>
        ) : (
          <p>You must be connected to mint!</p>
        )}
      </div>
    </div>
  );
};
export default MainMint;
