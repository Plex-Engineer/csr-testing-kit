# Testing Repo for CSR

## Getting Started

```bash
# install dependencies
yarn install

# deploy test contract
npx hardhat run scripts/deploy.js --network <NETWORK>

# register recipient for fees
npx hardhat run scripts/register.js --network <NETWORK>

# run a sample TX
npx hardhat run scripts/tx.js --network <NETWORK>
```

## Helpers
```bash
# get nonce of account
node scripts/getNonce.js
```

## Sample hardhat.config.js
```javascript
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: `http://localhost:8545`,
      accounts: [""]
    }
  }
};

```