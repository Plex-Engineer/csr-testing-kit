const { ethers } = require("hardhat");


async function main() {
    const [deployer] = await ethers.getSigners();

    // attach to contract
    const Test = await ethers.getContractAt("Test", "0x6E253F1D65A30545ac42a284043Bbc3fbcFF1549");
    const Test2 = await ethers.getContractAt("Test", "0x97688033107630f6a32d07314763061f5674Ed83");


    // register recipient address in turnstile
    const increment = await Test.increment(11);
    const increment2 = await Test2.increment(11);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });