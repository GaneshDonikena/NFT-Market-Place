const hre = require("hardhat")

async function main() {
    const nftMarketplace = await hre.ethers.deployContract("NFTMarketplace")

    await nftMarketplace.waitForDeployment()

    const address = await nftMarketplace.getAddress()

    console.log(`contract address is ${address}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
