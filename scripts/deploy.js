const { ethers } = require("hardhat");

async function main() {
  const name = process.env.NFT_NAME || "SamAlpha NFT";
  const symbol = process.env.NFT_SYMBOL || "SAM";
  const Factory = await ethers.getContractFactory("SamAlphaNFT");
  const nft = await Factory.deploy(name, symbol);
  await nft.waitForDeployment();
  console.log("NFT contract:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
