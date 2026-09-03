const { ethers } = require("hardhat");

async function main() {
  const address = process.env.NFT_ADDRESS;
  if (!address) throw new Error("NFT_ADDRESS is required in .env");

  const [signer] = await ethers.getSigners();
  const recipient = process.env.RECIPIENT || signer.address;
  const tokenUri = process.env.TOKEN_URI;
  if (!tokenUri) throw new Error("TOKEN_URI is required");

  const nft = await ethers.getContractAt("SamAlphaNFT", address);
  const tx = await nft.mint(recipient, tokenUri);
  console.log("Transaction:", tx.hash);
  const receipt = await tx.wait();
  console.log("Minted in block:", receipt.blockNumber);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
