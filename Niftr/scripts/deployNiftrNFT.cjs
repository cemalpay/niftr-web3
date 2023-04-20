const { ethers } = require("hardhat");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  const NiftrNFT = await ethers.getContractFactory("NiftrNFT");
  const niftrNFT = await NiftrNFT.deploy();

  await niftrNFT.deployed();

  console.log("NiftrNFT deployed to:", niftrNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
