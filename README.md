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