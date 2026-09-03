# Swisstronik NFT Minter

Independent Hardhat project for deploying an ERC-721 collection and minting NFTs on a configurable Swisstronik-compatible EVM network.

## Features

- ERC-721 + token URI storage
- Owner-controlled minting
- Configurable RPC URL and chain ID
- Deploy and mint scripts
- Private key loaded only from `.env`

## Setup

```bash
npm install
cp .env.example .env
```

Set `PRIVATE_KEY`, then compile and deploy:

```bash
npm run compile
npm run deploy
```

Copy the deployed contract address into `NFT_ADDRESS` in `.env`.

Mint an NFT:

```bash
RECIPIENT=0x... TOKEN_URI="ipfs://..." npm run mint
```

## Security

Never commit a real private key. `.env` is ignored by Git.

---

## More from SamAlpha1

Before running unfamiliar GitHub or Web3 code, scan the account and its public repositories with **[GitHub Trust Auditor](https://samalpha1.github.io/GitHubTrustAuditor/)**.

Maintained by **[SamAlpha1](https://github.com/SamAlpha1)** · Follow **[@samalpha_ on X](https://x.com/samalpha_)**
