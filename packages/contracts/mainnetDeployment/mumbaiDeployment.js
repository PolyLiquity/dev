const { mainnetDeploy } = require('./polyMainnetDeployment.js')
const configParams = require("./deploymentParams.mumbai.js")

async function main() {
  await mainnetDeploy(configParams)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
