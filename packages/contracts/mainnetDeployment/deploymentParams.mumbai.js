const externalAddrs  = {
  // https://data.chain.link/eth-usd
  CHAINLINK_ETHUSD_PROXY: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", 
  // https://docs.tellor.io/tellor/integration/reference-page
  TELLOR_MASTER:"0xbc2f9E092ac5CED686440E5062D11D6543202B24",
  // https://uniswap.org/docs/v2/smart-contracts/factory/
  UNISWAP_V2_FACTORY: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
  UNISWAP_V2_ROUTER02: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
  WETH_ERC20: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
}

const liquityAddrsTest = {
  GENERAL_SAFE:"0x8be7e24263c199ebfcfd6aebca83f8d7ed85a5dd",  // Hardhat dev address
  LQTY_SAFE:"0x20c81d658aae3a8580d990e441a9ef2c9809be74",  //  Hardhat dev address
  // LQTY_SAFE:"0x66aB6D9362d4F35596279692F0251Db635165871",
  DEPLOYER: "0x66aB6D9362d4F35596279692F0251Db635165871" // Mainnet test deployment address
}

const liquityAddrs = {
  GENERAL_SAFE:"0x3c198B7f3bA594804aEeA8894d0a58BCc345b8ce", // TODO
  LQTY_SAFE:"0xbFdECf1Db5c22d4CD3B0Bb970cF867BEFd2caE27", // TODO
  DEPLOYER: "0xD4D121b2ba5dC9eC6e028F9cdDCA1a33c73604D4",
}

const beneficiaries = {
  TEST_INVESTOR_A: "0x6E4E6299AF6DdF1fD7B0e46A19eB4e7914BFe392",
  TEST_INVESTOR_B: "0xE63ec0c695e844Cff7553DB515719cDDb0d5711c"
}

const OUTPUT_FILE = './mainnetDeployment/mumbaiDeploymentOutput.json'

const delay = ms => new Promise(res => setTimeout(res, ms));
const waitFunction = async () => {
  return delay(90000) // wait 90s
}

const GAS_PRICE = 1000000000 // 1 Gwei
const TX_CONFIRMATIONS = 1

const ETHERSCAN_BASE_URL = 'https://mumbai.polygonscan.com/'

module.exports = {
  externalAddrs,
  liquityAddrs,
  beneficiaries,
  OUTPUT_FILE,
  waitFunction,
  GAS_PRICE,
  TX_CONFIRMATIONS,
  ETHERSCAN_BASE_URL,
};
