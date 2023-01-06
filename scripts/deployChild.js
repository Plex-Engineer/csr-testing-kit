const { ethers } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("Factory");
  const factory = await Factory.attach("0x6E253F1D65A30545ac42a284043Bbc3fbcFF1549");

  const deploy = await factory.deployChild(1, false);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });