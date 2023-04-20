require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.REACT_APP_SEPOLIA_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  },
};
