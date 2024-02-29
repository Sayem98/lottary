const hre = require("hardhat");

const deploy = async () => {
  const Lottery = await ethers.deployContract("Lottery");
  //   await Lottery.deployed();
  console.log("Lottery deployed to:", Lottery.target);
};

deploy().catch((e) => {
  console.error(e);
  process.exit(1);
});
