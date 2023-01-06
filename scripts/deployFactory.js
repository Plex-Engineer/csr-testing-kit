const { ethers } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("Factory");
  const factory = await Factory.deploy("0x08332d1f06A3396B45d3aEA6AAcF1838E5A741e6", "0xEcf044C5B4b867CFda001101c617eCd347095B44");

  console.log("Factory address:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });