const { expect } = require("chai");
// const hre = require("hardhat");

describe("lottery", function () {
  let lottery;
  before(async function () {
    lottery = await ethers.deployContract("Lottery");
  });

  it("Should get the random number", async function () {
    // const lottery = await ethers.deployContract("Lottery");
    // log contract address
    console.log("Lottery deployed to:", lottery.target);
    const randomNumber = await lottery.getRandom();
    expect(Number(randomNumber)).to.be.a("number");
  });
  it("should set a value", async function () {
    // const lottery = await ethers.deployContract("Lottery");
    // log contract address
    console.log("Lottery deployed to:", lottery.target);
    await lottery.setValue(5);
    expect(await lottery.value()).to.equal(5);
  });
});
