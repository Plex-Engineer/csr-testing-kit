const ethers = require("ethers");

var provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
);

var nonce = getNonce("0x6E253F1D65A30545ac42a284043Bbc3fbcFF1549");

async function getNonce(addr) {
    const nonce = await provider.getTransactionCount(addr);
    console.log(nonce);
}
