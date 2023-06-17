// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Marketplace {

struct User {
string fullName;
string email;
string username;
string country;
string address_;
uint256 reward;
}

struct Product {
string name;
string image;
string description;
uint256 price;
uint256 quantity;
uint256 postingFee;
}

// mapping(address => User) public users;
mapping(uint256 => Product) public products;

event UserRegistered(address indexed user, string fullName, string email, string username, string country, string useraddress, bool isSeller);
event ProductCreated(uint256 indexed productId, string name, string image, string description, uint256 price, uint256 quantity, uint256 postingFee);
event ProductSold(uint256 indexed productId, address indexed buyer, address indexed seller);
event RewardDistributed(address indexed user, uint256 amount);

function registerUser(string memory fullName, string memory email, string memory username, string memory country, string memory useraddress, bool isSeller) public {
User memory user = User(fullName, email, username, country, isSeller, msg.sender);
// users[msg.sender] = user;
emit UserRegistered(msg.sender, fullName, email, username, country, isSeller);
}

function createProduct(string memory name, string memory image, string memory description, uint256 price, uint256 quantity) public {
Product memory product = Product(name, image, description, price, quantity, calculatePostingFee(quantity));
products[product.id] = product;
emit ProductCreated(product.id, name, image, description, price, quantity, product.postingFee);
}

function buyProduct(uint256 productId) public payable {
Product memory product = products[productId];
require(product.quantity > 0, "Product is out of stock");
require(msg.value >= product.price, "Not enough funds");

product.quantity--;
emit ProductSold(productId, msg.sender, product.seller);

uint256 rewardAmount = product.postingFee * 70 / 100;
distributeReward(rewardAmount);
}

function calculatePostingFee(uint256 quantity) public view returns (uint256) {
return 10 * quantity;
}

function distributeReward(uint256 amount) public {
uint256 communityReward = amount * 30 / 100;
uint256 userReward = amount * 70 / 100;

// Send community reward to the community contract
// ...

// Send user reward to all users
for (address user : users.keys()) {
  users[user].reward += userReward / users.length;
}

emit RewardDistributed(msg.sender, amount);
Use code with caution. Learn more
}

function getReward(address user) public view returns (uint256) {
return users[user].reward;
}
}