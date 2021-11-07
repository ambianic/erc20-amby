// scripts/deploy.js
async function main () {
  const AMBY = await ethers.getContractFactory('AmbianicToken');
  console.log('Deploying AmbianicToken...');
  const amby = await upgrades.deployProxy(AMBY);
  await amby.deployed();
  console.log('AmbianicToken deployed to:', amby.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
