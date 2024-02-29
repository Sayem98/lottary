/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// const INFURA_API_KEY = process.env.INFURA_API_KEY;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY,
  // },
  networks: {
    hardhat: {},
    // sepolia: {
    //   url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [PRIVATE_KEY],
    // },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  // sourcify: {
  //   enabled: true,
  // },
};
