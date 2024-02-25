const hre = require("hardhat");

async function main() {
    const nftContract = await hre.ethers.deployContract("NFT");

    await nftContract.waitForDeployment();

    console.log("address:", nftContract.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });