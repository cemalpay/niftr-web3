import hre from "hardhat";

async function main() {
  const NiftrNFT = await hre.ethers.getContractFactory("NiftrNFT");
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
