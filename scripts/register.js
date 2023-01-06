const { ethers } = require("hardhat");


async function main() {
    const [deployer] = await ethers.getSigners();

    // attach to contract
    const Test = await ethers.getContractAt("Test", "0xEaFb604D0a69aD96534D007969D6574c492d26fa");

    // register recipient address in turnstile
    const register = await Test.register("0x2C0C0A9818224c8e2F09e8c19b9f36e2F3056BEf");

    // const Turnstile = await ethers.getContractAt("Turnstile", "0xEcf044C5B4b867CFda001101c617eCd347095B44");

    // const register = await Turnstile.register("0x3Cb87382d94570a759768531e6434F6427e6F71C");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });