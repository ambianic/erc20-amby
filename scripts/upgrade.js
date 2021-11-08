// scripts/upgrade.js
const { ethers } = require("hardhat");

async function main () {
  const newImplName = 'AmbianicTokenV1_0_1';
  const NewImpl = await ethers.getContractFactory(newImplName);
  console.log(`Upgrading to ${newImplName}...`);
  const proxyAddress = '0xC55FdeA8483B1b1e4F0ECC56848e63d2224d89c4'
  // upgrade Proxy and call one time implementation init function
  // https://docs.openzeppelin.com/upgrades-plugins/1.x/api-hardhat-upgrades#upgrade-proxy
  await upgrades.upgradeProxy(
    proxyAddress,
    NewImpl,
    {
      call: { fn: 'initializeV1_0_1', args: [] }
    }
  );
  console.log(`AmbianicToken upgraded to:`, newImplName);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
