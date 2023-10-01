const TronWeb = require('tronweb')

const Marketplace = artifacts.require('Marketplace')
const Tom = artifacts.require('Tom')
const Escrow = artifacts.require('Escrow')

module.exports = async function (deployer) {
  const USDT = 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf' // TRON Testnet USDT Address
  const arbiterFee = TronWeb.toSun('5')
  const ownerAddress = ''

  // Deploy contracts
  await deployer.deploy(Marketplace, USDT, 18, ownerAddress, arbiterFee)
  const marketplace = await Marketplace.deployed()

  await deployer.deploy(Tom)
  const tom = await Tom.deployed()

  await deployer.deploy(Escrow, marketplace.address)
  const escrow = await Escrow.deployed()

  // Setup roles and permissions
  const PAUSER_ROLE = web3.utils.soliditySha3('PAUSER_ROLE')
  const MINTER_ROLE = web3.utils.soliditySha3('MINTER_ROLE')
  const BURNER_ROLE = web3.utils.soliditySha3('BURNER_ROLE')
  const DEFAULT_ADMIN_ROLE =
    '0x0000000000000000000000000000000000000000000000000000000000000000'

  await tom.grantRole(PAUSER_ROLE, marketplace.address)
  await tom.grantRole(MINTER_ROLE, marketplace.address)
  await tom.grantRole(BURNER_ROLE, marketplace.address)
  await tom.grantRole(DEFAULT_ADMIN_ROLE, deployer.address)

  // Activate marketplace
  await marketplace.activate(tom.address, escrow.address)
  await marketplace.transferOwnership(ownerAddress)

  // Approve tokens
  await tom.approve(marketplace.address, 100 * Math.pow(10, 18))
}
