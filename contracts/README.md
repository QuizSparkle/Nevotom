# Getting Started

## Install foundry:
```
curl -L https://foundry.paradigm.xyz | bash
```

## Install libraries:

```
cd contracts/
forge install @openzeppelin/openzeppelin-contracts --no-git
```

## Build contracts:
```
forge build
```

## Local testing:
```
forge test -vv --match-contract MarketplaceTest
```

## To deploy on testnet:
1. copy .env-example to .env and set the variables.

2. Get testnet FTM

Head over to [faucets.fantom.network](https://faucet.fantom.network/) and get some tesnet FTMs.

3. Deploy
```
forge script script/DeployProtocol.s.sol:DeployMarketplace --broadcast --rpc-url ${FANTOM_RPC_URL} --verify --etherscan-api-key ${FTMSCAN_API_KEY} 
```

4. Tokens used to buy items:
 - Link : 0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F (for Testnet)
 - USDT : 0x049d68029688eAbF473097a2fC38ef61633A3C7A (for mainnet)
