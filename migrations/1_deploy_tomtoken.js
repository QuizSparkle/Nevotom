const TomToken = artifacts.require("TomToken");

module.exports = function (deployer) {
  deployer.deploy(TomToken);
};
