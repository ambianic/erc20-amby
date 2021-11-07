// scripts/deploy.js
async function main () {
  const AMB = await ethers.getContractFactory('AmbianicToken');
  console.log('Deploying AmbianicToken...');
  const amb = await upgrades.deployProxy(AMB);
  await amb.deployed();
  console.log('AmbianicToken deployed to:', amb.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
