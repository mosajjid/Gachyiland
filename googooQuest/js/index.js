var contractINT = new Web3('https://polygon-mumbai.g.alchemy.com/v2/Z9Pn3WcHAkLtb7oVQO4EtySOKgEwoG5R');
let web3 = new Web3(Web3.givenProvider);
var gachyilandNFT;
var gachyilandFarm;
var gachyilandNFTSend;
var gachyilandFarmSend;
var user;
var categorylength = 5;
var categoryURI = [];
var tokenURI = [];
var stakedTokensURI = [];
var stakedTokens = [];
var nftID;
var categID;
let sliderHTML = "";
var gachyilandNFTAddress = "0x6382f316D3f5863b46E26468FB401C915B0BE73E";
var gachyilandNFTAbi = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint256", "name": "_maxTokenPerUser", "type": "uint256" }, { "internalType": "string", "name": "baseTokenURI_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "categoryId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "maxPerAddress", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "categoryTokenCap", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "isPrivate", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "isActive", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "AddCategory", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "ReserveToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "UnReserveToken", "type": "event" }, { "inputs": [], "name": "REVEAL_TIMESTAMP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "_categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "_isPrivate", "type": "bool" }, { "internalType": "bool", "name": "_isActive", "type": "bool" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "addCategory", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_categoryId", "type": "uint256" }], "name": "allowAddressToMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "allowMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "categories", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "isPrivate", "type": "bool" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_categoryId", "type": "uint256" }], "name": "disableAddressMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getReservedTokenOwners", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isAdminMintingDone", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastPublicTokenMinted", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokensPerUser", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "mintTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "reserveToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "reservedTokenOwners", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_baseURILink", "type": "string" }], "name": "setBaseURILink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "setMaxTokensPerUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "revealTimeStamp", "type": "uint256" }], "name": "setRevealTimestamp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopAdminMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokensMintedPerCategoryPerAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokensReserved", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "totalTokensMintedPerCategory", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "unreserveToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "_categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "_isPrivate", "type": "bool" }, { "internalType": "bool", "name": "_isActive", "type": "bool" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "updateCategory", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdrawETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

var gachyilandFarmAddress = "0x0ce30dDD703720D68cB69EADd7472fE01cE83903";
var gachyilandFarmAbi = [{"inputs":[{"internalType":"contract Gachyiland","name":"_gachyilandAddress","type":"address"},{"internalType":"contract IRewardToken","name":"_rewardToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"},{"indexed":false,"internalType":"uint256","name":"stakingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paymentTimes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AddCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftID","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"users","type":"address[]"},{"indexed":false,"internalType":"bool","name":"allow","type":"bool"}],"name":"EmergencyWithdrawPermission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftID","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"categoryID","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"},{"indexed":false,"internalType":"uint256","name":"stakingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"paymentTimes","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UpdateCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftID","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_stakingPeriod","type":"uint256"},{"internalType":"uint256","name":"_paymentTimes","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"addCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"},{"internalType":"bool","name":"allow","type":"bool"}],"name":"allowEmergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowedEmergencyWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"categories","outputs":[{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"stakingPeriod","type":"uint256"},{"internalType":"uint256","name":"paymentTimes","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"depositsCounter","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolID","type":"uint256"},{"internalType":"uint256","name":"_nftID","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gachyilandAddress","outputs":[{"internalType":"contract Gachyiland","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"},{"internalType":"uint256","name":"_nftID","type":"uint256"}],"name":"getAmountToHarvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getStakedTokens","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_nftID","type":"uint256"}],"name":"getSumOfPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_nftID","type":"uint256"}],"name":"getTimeOfStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftID","type":"uint256"},{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_poolID","type":"uint256"},{"internalType":"uint256","name":"_nftID","type":"uint256"}],"name":"isHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IRewardToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IRewardToken","name":"newToken","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftID","type":"uint256"},{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_categoryId","type":"uint256"},{"internalType":"uint256","name":"_stakingPeriod","type":"uint256"},{"internalType":"uint256","name":"_paymentTimes","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updateCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftID","type":"uint256"},{"internalType":"uint256","name":"poolID","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const loader = document.getElementById('loader')
const cardSection = document.getElementsByClassName('capsulesSlider')[0];
window.userWalletAddress = null
const loginButton = document.getElementById('connectWallet')
const loginButtonMob = document.getElementById('connectWalletMob')
const userWallet = document.getElementById('userWallet')
const lastPageStaked = document.getElementById('lastPageStaked')
//Gif image Hide by default


$(window).on("load", function() {
  //Gif image Show
  console.log("load complete");
  document.getElementById('imageToggle').style.display ="none";
  document.getElementById('gifToggle').style.display ="block";
});
$(document).ready(function () {
  document.getElementById('quest__duration').style.paddingTop = $('#navbar__id').height() + 'px';
  loginButton.addEventListener('click', loginWithMetaMask);
  loginButtonMob.addEventListener('click', loginWithMetaMask);

  // let reloader = window.ethereum._state.initialized();
  // const r = Promise.resolve(reloader);
  // r.then(value => {
  // console.log('reloader',value);
  // }).catch(err => {
  //   console.log(err);
  // });




  // web3.eth.net.isListening()
  // .then(() => console.log('is connected'))
  // .catch(e => console.log('Wow. Something went wrong: '+ e));


  if (!window.ethereum) {
    loginButton.innerText = 'Install MetaMask'
    loginButton.classList.remove('btn-primary')
    loginButton.classList.add('greyScale')
    loginButtonMob.classList.add('greyScale')
    document.getElementById('sectionConnectWallet').classList.add('greyScale')
    loginButton.removeEventListener('click', loginWithMetaMask)
    document.getElementById("progressStatus").innerText = 'please install metamask';
      document.getElementById('bar-div').classList.add('d-none');
      $('#pop2').modal({ backdrop: 'static', keyboard: false });
      $("#pop2").modal('toggle')
      document.getElementById("toggle-btn").classList.remove('d-none');
      document.getElementById("toggle-btn").innerText = 'okay';
    return false
  } else {
    
    if(window.localStorage.getItem('isLoggedIn')==1){
      checkAcc();
      checkMetamaskLog();
    }else{
      loginButton.innerText = 'Connect'
      loginButton.addEventListener('click', loginWithMetaMask)
      document.getElementById('sectionConnectWallet').disabled=false;
      
    }
    window.ethereum.on('accountsChanged', function (accounts) {
      console.log("Account changed Called");
      loginWithMetaMask();
      location.reload();
    });
    window.ethereum.on('chainChanged', () =>
      chainIdCheck()
    );
    
  }
//  setInterval(getStakedTokenMethod,300000)
  
  

})
async function checkAcc(){
  let accounts = await window.ethereum.enable();
  if(accounts[0]!==window.localStorage.getItem('loggedinAccount')){
    loginWithMetaMask()
  }
}
async function checkMetamaskLog(){
  try 
  {
    let metamaskLocked = await window.ethereum._metamask.isUnlocked();
    const p = Promise.resolve(metamaskLocked);
    p.then(value => {
      if(!value){
        console.log(value);
        window.localStorage.setItem('isLoggedIn', '');
   
        window.localStorage.setItem('loggedinAccount', "");
        loginButton.innerText = 'Connect'
        loginButton.addEventListener('click', loginWithMetaMask)
        document.getElementById('sectionConnectWallet').disabled=false;
        
      }else{
        setLoginUser();
      }
    }).catch(err => {
      console.log('errr',err);
    });
  }catch(e){
    console.log(e);
  }

}
async function addPolygonTestnetNetwork() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x13881' }],
    });
    console.log("Called Here");
  } catch (error) {
    console.log("Error Called" + error);
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x13881', // Hexadecimal version of 80001, prefixed with 0x 
            chainName: "polygon Testnet",
            nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18, },
            rpcUrls: ["https://rpc-mumbai.matic.today"],
            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
            iconUrls: [""],
          }],
        });
      } catch (addError) {
        console.log('Did not add network');
      }
    }
  }
}
async function chainIdCheck() {
 
  const chainId = await web3.eth.getChainId();
  console.log('index:',[80001].indexOf(chainId),'chain ID',(chainId));
  if([80001].indexOf(chainId)==-1)
  {
      window.alert("You are not allowed on other chain");
      addPolygonTestnetNetwork();
      return false;
      
  }
    return true;
}

async function signOutOfMetaMask() {
  window.localStorage.setItem('isLoggedIn', '');
  window.localStorage.setItem('loggedinAccount', "");
  location.reload();
}
async function loginWithMetaMask() {
  window.localStorage.setItem('isLoggedIn', '');
  window.localStorage.setItem('loggedinAccount', "");
  let accounts = await window.ethereum.enable();
  window.localStorage.setItem('isLoggedIn', '1');
  window.localStorage.setItem('loggedinAccount', accounts[0]);
  setLoginUser();
}



async function setLoginUser(){
  loader.classList.remove("d-none");
  user = window.localStorage.getItem('loggedinAccount');

  loginButton.removeEventListener('click', loginWithMetaMask)
  loginButtonMob.removeEventListener('click', loginWithMetaMask)

  gachyilandNFT = new contractINT.eth.Contract(gachyilandNFTAbi, gachyilandNFTAddress, {})
  gachyilandFarm = new contractINT.eth.Contract(gachyilandFarmAbi, gachyilandFarmAddress, {})
  gachyilandNFTSend = new web3.eth.Contract(gachyilandNFTAbi, gachyilandNFTAddress, {})
  gachyilandFarmSend = new web3.eth.Contract(gachyilandFarmAbi, gachyilandFarmAddress, {})
  userWallet.innerText = 'Connected to' + ' - ' + user.substring(0, 5) + "..." + user.slice(-3)
  document.getElementById("mobConnectIndicator").src = "../assets/Images/ConnectedBtn.png";
  userWallet.classList.add('userAddressDiv')
  loginButton.innerText = 'Sign Out'
  firstPanel.classList.add("d-none");
  secondPanel.classList.remove("d-none");

  loginButton.removeEventListener('click', loginWithMetaMask)
  setTimeout(() => {
    loginButton.addEventListener('click', signOutOfMetaMask)
  }, 200)
  setTimeout(() => {
    loginButtonMob.addEventListener('click', signOutOfMetaMask)
  }, 200)
  await dataGather();
  loader.classList.add("d-none");
}
async function dataGather() {

  tokenURI.length = '0'
  stakedTokensURI.length = '0'
  categoryURI.length = '0'
  categID = '';
  nftID = '';
  const nxt_btn = document.getElementById('nxt_btn');

  let gatchyLand = await gachyilandNFT.methods.balanceOf(user).call({}, async function (error, result) {
    if (error) {
      console.log("1st calll " + error);
    } else {
      let gachyiFarm = await gachyilandFarm.methods.getStakedTokens(user).call({}, async function (error, result) {
        if (error) {
          console.log("2st calll " + error);
        } else {
          stakedTokens = result;
          for (let i = 0; i < stakedTokens.length; i++) {

            let gachyiNFT = await gachyilandNFT.methods.tokenURI(stakedTokens[i]).call({}, async function (error, result) {
              if (error) {
                console.log("3st calll " + error);
              } else {console.log(result);
                // fetch(result + '.json', { mode: 'no-cors'})
                console.log("My Call " + result);
                fetch(result).then((r)=>{r.text().then((htmlData)=>{
                    stakedTokensURI.push(JSON.parse(htmlData));
                  })
                }).catch( e => { console.log(e); });

                // await fetch(result, { mode: 'no-cors' } )
                //   .then((response) => {
                //     return response.json();
                //   })
                //   .then(jsondata => {
                //     console.log(jsondata);
                //     stakedTokensURI.push(jsondata)
                //   }).catch( e => {
                //     console.log(e);
                //   });
              }

            })
          }

        }
      })
      for (let i = 0; i < result; i++) {
        gachyilandNFT.methods.tokenOfOwnerByIndex(user, i).call({}, function (error, result) {
          if (error) {
            console.log("4st calll " + error);
          }
          else {
            gachyilandNFT.methods.tokenURI(result).call({}, function (error, result) {
              if (error) {
                console.log(error);
              } else {
                fetch(result).then((r)=>{r.text().then((htmlData)=>{
                  tokenURI.push(JSON.parse(htmlData));
                  })
                }).catch( e => { console.log(e); });

                //  fetch(result + '.json', { mode: 'no-cors'})

                //  fetch(result, { mode: 'no-cors'})
                // //  .then(response => response.json())
                // .then(blob => blob.json())
                //   .then(jsondata => {
                //     tokenURI.push(jsondata)
                //     // $('.capsulesSlider').trigger('add.owl.carousel', [createCard(jsondata)])
                //     // .trigger('refresh.owl.carousel');
                //     // //   $(".capsulesSlider").append(createCard(jsondata));
                //     //  cardSection.appendChild(createCard(jsondata));
                //   }).catch( e => {
                //     console.log(e);
                //   });
              }
            })

          }
        });
      }



      //  addstakeNFT();

    }


  });

  await categoryInfo();
  await getStakedTokenMethod();
  document.getElementById('sub_btn').parentNode.disabled = true;
  document.getElementById('sub_btn').setAttribute("class", "greyScale");
  document.getElementById('sub_btn_2').parentNode.disabled = true;
  document.getElementById('sub_btn_2').setAttribute("class", "greyScale");
  nxt_btn.parentNode.disabled = true;
  nxt_btn.classList.add("greyScale");


  //slick slider vertical

  loader.classList.add("d-none");
}


async function addNFT() {


  for (let i = 0; i < tokenURI.length; i++) {
    $('.capsulesSlider').trigger('add.owl.carousel', [createCard(tokenURI[i])])
      .trigger('refresh.owl.carousel');
  }
}
async function addstakeNFT() {
  for (let i = 0; i < stakedTokensURI.length; i++) {
    $('.capsulesSlider').trigger('add.owl.carousel', [createStakedCard(stakedTokensURI[i])])
      .trigger('refresh.owl.carousel');
  }
  $('.capsulesSlider').trigger('add.owl.carousel', [buynow()])
    .trigger('refresh.owl.carousel');
}
function createCard(data) {
  const item = document.createElement('div');
  item.className = 'item';
  item.className += ' item_' + data.name;
  const card = document.createElement('div');
  card.className = 'goo__card';
  const img = document.createElement('img');
  // img.src = "./assets/Images/Goo__card_image_2.png";
  img.src= data.image;
  img.className = 'card__profile__image';
  card.append(img);

  const name = document.createElement('div');
  name.className = 'name__plate';
  card.append(name);
  const para = document.createElement('p');
  para.innerText = " GOO GOO";
  name.append(para)
  const heading = document.createElement('h6')
  heading.innerText = "#" + data.edition;
  name.append(heading)
  const check = document.createElement('div')
  check.className = 'check';
  card.append(check);
  const btn = document.createElement('button');
  btn.className = 'sel_nft_ype';
  btn.setAttribute("onclick", "ClickCheckbox(event,this, 'sel_nft_" + data.edition + "')");

  const img_checked = document.createElement('img')
  img_checked.className = 'img-fluid checked_image';
  img_checked.src = "./assets/Images/check__checked.png";
  btn.append(img_checked);

  const img2 = document.createElement('img')
  img2.className = 'img-fluid unchecked_image';
  img2.src = "./assets/Images/Check__without.png";
  btn.append(img2);
  const checkboxBtn = document.createElement('input')
  checkboxBtn.setAttribute("type", "checkbox");
  checkboxBtn.setAttribute("name", "sel_nft");
  checkboxBtn.setAttribute("id", "sel_nft_" + data.edition);
  checkboxBtn.setAttribute("class", "nft-checkbox-btn");
  checkboxBtn.setAttribute("value", data.edition);
  btn.append(checkboxBtn);

  check.append(btn);

  item.append(card);
  return item;

}
function createStakedCard(data) {
  const StakedItem = document.createElement('div');
  StakedItem.className = 'item';
  StakedItem.className += ' item_' + data.name;
  const card = document.createElement('div');
  card.className = 'goo__card';
  const img = document.createElement('img');
  // img.src = "./assets/Images/Goo__card_image_2.png";
  img.src = data.image;
  img.className = 'card__profile__image greyScale';
  card.append(img);

  const name = document.createElement('div');
  name.className = 'name__plate';
  card.append(name);
  const para = document.createElement('p');
  para.innerText = " GOO GOO";
  name.append(para)
  const heading = document.createElement('h6')
  heading.innerText = "#" + data.edition;
  name.append(heading)
  const bar__busy = document.createElement('div')
  bar__busy.className = 'bar__busy';

  const bar = document.createElement('div');
  // bar.className = 'bar';
  //     const img3 = document.createElement('img')
  //     img3.className = 'img-fluid';
  //     img3.src =  "./assets/Images/Card__bar.png"; 
  // bar.append(img3);
  const busy = document.createElement('div');
  busy.className = 'busy';
  const img4 = document.createElement('img')
  img4.className = 'img-fluid';
  img4.src = "./assets/Images/Card__Curently__buy.png";
  busy.append(img4);

  // bar__busy.append(bar);
  bar__busy.append(busy);
  card.append(bar__busy);

  StakedItem.append(card);
  return StakedItem;

}

function buynow() {
  const innerHTML = '<div class="item buynow"><div class="goo__card"><img src="./assets/Images/Goo__card_image_4.png"class="card__profile__image" alt=""><div class="name__plate"><p>GOO GOO</p><h6>EMPTY</h6></div><div class="buy__goo_goo"><a href="https://opensea.io/collection/goo-goos" target="_blank"><img src="./assets/Images/Card__Buy__goo_goo.png" class="img-fluid" alt=""></a></div></div></div>';
  return innerHTML;
}

function ClickCheckbox(e, el, checkId) {

  const nxt_btn = document.getElementById('nxt_btn');
  if (el.parentNode.classList.contains('active_btn')) {
    el.parentNode.classList.toggle("active_btn");
    document.getElementById(checkId).removeAttribute("checked");
    nftID = '';

  } else {
    var IsChecked = $('.nft-checkbox-btn:checkbox:checked').length > 0;
    if (IsChecked) {
      nxt_btn.removeAttribute("class", "greyScale");
      // $('#pop2').modal({backdrop: 'static', keyboard: false});
      $("#pop2").modal('toggle');

      document.getElementById("progressStatus").innerText = 'please select one Goo Goo at a time';
      document.getElementById('toggle-btn').classList.remove('d-none');
      document.getElementById('bar-div').classList.add('d-none');
      document.getElementById("toggle-btn").innerText = 'okay';
    } else {
      el.parentNode.classList.toggle("active_btn");
      nxt_btn.parentNode.disabled = false;
      document.getElementById(checkId).setAttribute("checked", "checked");
      nftID = document.getElementById(checkId).value;
      console.log(nftID);
      nxt_btn.classList.remove("greyScale");

    }
  }
  if (!nftID) {
    nxt_btn.parentNode.disabled = true;
    nxt_btn.classList.add("greyScale");
  }
}
//---------------------------------------------------------------------nft info --------------------------------------------------------------

async function categoryInfo() {
  for (let i = 0; i < categorylength; i++) {
    let cat = await gachyilandFarm.methods.categories(i).call({}, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        categoryURI.push(result);
        //  $('.capsulesSlider__duration').trigger('add.owl.carousel', [createCategoryCard(i ,result)])
        //                          .trigger('refresh.owl.carousel');

      }
    });
  }

}
function dispCategory() {
  var length = $('.capsulesSlider__duration .item').length;
  console.log("capsulesSlider__duration Items" + length);
  for (var i = 0; i < length; i++) {
    $(".capsulesSlider__duration").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
  }
  for (let i = 0; i < categoryURI.length; i++) {
    $('.capsulesSlider__duration').trigger('add.owl.carousel', [createCategoryCard(i, categoryURI[i])])
      .trigger('refresh.owl.carousel');
  }
}
function secondsToHms(d) {
  d = Number(d);
  var days = Math.floor(d / 86400)

  // var h = Math.floor(d / 3600);
  // var m = Math.floor(d % 3600 / 60);
  // var s = Math.floor(d % 3600 % 60);

  // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";



  // return hDisplay + mDisplay + sDisplay; 
  return days;
}
function rewardCalc(price) {
  return price / 1000000000000000000;
}
function createCategoryCard(id, data) {
  const item = document.createElement('div');
  item.className = 'item item_' + id;
  // item.className += ' item_'+data.name;
  const card = document.createElement('div');
  card.className = 'goo__card';
  const duration = document.createElement('div');
  duration.className = 'duration__pic';
  const days = document.createElement('h3');
  days.innerText = secondsToHms(data[1]);
  duration.append(days);
  const duration__plan = document.createElement('div');
  duration__plan.className = 'duration__plan'
  const first = document.createElement('div');
  first.className = 'first';
  const para = document.createElement('p');
  para.innerText = "staking period";
  const heading = document.createElement('h3');
  heading.innerText = secondsToHms(data[1]) + 'days';
  first.append(para);
  first.append(heading);
  const second = document.createElement('div');
  second.className = 'second';
  const para2 = document.createElement('p');
  para2.innerText = "Quest Reward";
  const heading2 = document.createElement('h3');
  heading2.innerText = rewardCalc(data[3]) + ' $PLMR';
  second.append(para2);
  second.append(heading2);


  duration__plan.append(first);
  duration__plan.append(second);
  card.append(duration);
  card.append(duration__plan);
  const check = document.createElement('div')
  check.className = 'checking';
  check.setAttribute("id", "categoryCheckbox");

  const btn = document.createElement('button');
  btn.className = 'category_type';
  btn.setAttribute("onclick", "categoryCheckbox(event,this, 'categoryCheckbox_" + id + "')");

  const img_checked = document.createElement('img')
  img_checked.className = 'img-fluid checked_image';
  img_checked.src = "./assets/Images/check__checked.png";
  btn.append(img_checked);

  const img2 = document.createElement('img')
  img2.className = 'img-fluid unchecked_image';
  img2.src = "./assets/Images/Check__without.png";
  btn.append(img2);
  const checkboxBtn = document.createElement('input')
  checkboxBtn.setAttribute("type", "checkbox");
  checkboxBtn.setAttribute("name", "category");
  checkboxBtn.setAttribute("id", "categoryCheckbox_" + id);
  checkboxBtn.setAttribute("class", "category-checkbox-btn");
  checkboxBtn.setAttribute("value", id);
  btn.append(checkboxBtn);

  check.append(btn);
  card.append(check);
  item.append(card);
  return item;

}
function categoryCheckbox(e, el, checkId) {

  const sub_btn = document.getElementById('sub_btn');
  const sub_btn_2 = document.getElementById('sub_btn_2');
  if (el.parentNode.classList.contains('active_btn')) {
    el.parentNode.classList.toggle("active_btn");
    document.getElementById(checkId).removeAttribute("checked");
    categID = '';
  } else {
    var IsChecked = $('.category-checkbox-btn:checkbox:checked').length > 0;
    if (IsChecked) {
      // $('#pop2').modal({backdrop: 'static', keyboard: false});
      $("#pop2").modal('toggle');

      document.getElementById("progressStatus").innerText = 'please select one Goo Goo at a time';
      document.getElementById('toggle-btn').classList.remove('d-none');
      document.getElementById('bar-div').classList.add('d-none');
      document.getElementById("toggle-btn").innerText = 'okay';
    } else {
      el.parentNode.classList.toggle("active_btn");
      document.getElementById(checkId).setAttribute("checked", "checked");
      categID = document.getElementById(checkId).value;
      console.log(categID);

    }
  }
  if (!categID) {
    sub_btn.parentNode.disabled = true;
    sub_btn.setAttribute("class", "greyScale");
    sub_btn_2.parentNode.disabled = true;
    sub_btn_2.setAttribute("class", "greyScale");
  } else {
    sub_btn.removeAttribute("class", "greyScale");
    sub_btn.parentNode.disabled = false;
    sub_btn_2.removeAttribute("class", "greyScale");
    sub_btn_2.parentNode.disabled = false;
  }
}
async function approveTXN(){
  document.getElementById("progressStatus").innerText = 'please approve';
        document.getElementById("progressbar").style.width = "1%"

        document.getElementById('bar-div').classList.remove('d-none');
        $('#pop2').modal({ backdrop: 'static', keyboard: false });
        $("#pop2").modal('toggle')
        document.getElementById("toggle-btn").classList.add('d-none');
  try {
    return await gachyilandNFTSend.methods.approve(gachyilandFarmAddress, nftID).send({ from: user,gasPrice: 90000000000,gasLimit: 9000000 }, function (err, txn) {
      if (err) {
        document.getElementById("progressStatus").innerText = 'Txn not completed';
        document.getElementById("toggle-btn").classList.remove('d-none');
        document.getElementById("bar-div").classList.add('d-none');
        document.getElementById("toggle-btn").innerText = 'okay';
        return false
      } else {
        document.getElementById("progressStatus").innerText = 'approval sent';
        document.getElementById("progressbar").style.width = "33%"
      }
    })
    
  } catch (error) {
    console.log(error);
    if(error.toString().includes('Transaction was not mined within 50 blocks, please make sure your transaction was properly sent. Be aware that it might still be mined')){
      document.getElementById("progressStatus").innerText = 'Txn might get completed please check metamask';
        document.getElementById("toggle-btn").classList.remove('d-none');
        document.getElementById("bar-div").classList.add('d-none');
        document.getElementById("toggle-btn").innerText = 'okay';
    }
    return false
  }
}
async function nftStaking(){
 
  
  try {
    console.log(nftID, categID,user);
    let stake_result = await gachyilandFarmSend.methods.stake(nftID, categID).send({ from: user,gasPrice: 90000000000,gasLimit: 9000000 },async function (err, txn) {
        if (err) {
          document.getElementById("progressStatus").innerText = 'Txn not completed';
          document.getElementById("toggle-btn").classList.remove('d-none');
          document.getElementById("bar-div").classList.add('d-none');
          document.getElementById("toggle-btn").innerText = 'okay';
          return false 
        } else {
          document.getElementById("toggle-btn").classList.add('d-none');
          document.getElementById("progressStatus").innerText = 'staking initiated';
          document.getElementById("progressbar").style.width = "60%";
        }
      })
      if (stake_result) {
        nftID = '';
        categID = '';
        tokenURI.length = 0;
        stakedTokensURI.length = 0;
        console.log('cleared everything');
        await getStakedTokenMethod();
      }
      document.getElementById("progressbar").style.width = "100%"
      document.getElementById("progressStatus").innerText = 'Quest has begun';
      document.getElementById("toggle-btn").innerText = 'okay'
      document.getElementById("toggle-btn").classList.remove('d-none');
      return true;
    
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrrr",error);
    if(error.toString().includes('Transaction was not mined within 50 blocks, please make sure your transaction was properly sent. Be aware that it might still be mined')){
      document.getElementById("progressStatus").innerText = 'Txn might get completed please check metamask';
        document.getElementById("toggle-btn").classList.remove('d-none');
        document.getElementById("bar-div").classList.add('d-none');
        document.getElementById("toggle-btn").innerText = 'okay';
    }
    return false;
  }
 
}


async function stakeNFT() {
  document.getElementById("toggle-btn").classList.add('d-none');
 
  testCheck = await gachyilandFarmSend.methods.stake(nftID, categID).estimateGas({ from: user, gasPrice: 200000000000 },async function (err, txn) {
     document.getElementById('sub_btn').parentNode.disabled = false;
  document.getElementById('sub_btn').removeAttribute("class", "greyScale");
  document.getElementById('sub_btn_2').parentNode.disabled = false;
  document.getElementById('sub_btn_2').removeAttribute("class", "greyScale");
    if(err){
     
      if(err.toString().includes('execution reverted: ERC721: transfer caller is not owner nor approved')){
      let approve_result= await approveTXN()
        if (approve_result.status) {
          document.getElementById("bar-div").classList.remove('d-none');
          document.getElementById("toggle-btn").classList.add('d-none');
          document.getElementById("progressStatus").innerText = 'staking initiated';
          document.getElementById("progressbar").style.width = "60%";
          let stake_result = await nftStaking();
          // console.log("Stake NFT False",stake_result);
          lastScreen()
          return stake_result;
        } 
      }
    }
  })
  if(testCheck){
    $('#pop2').modal({ backdrop: 'static', keyboard: false });
    $("#pop2").modal('toggle')
    document.getElementById("toggle-btn").classList.add('d-none');
  document.getElementById("progressStatus").innerText = 'approve staking';
  document.getElementById("progressbar").style.width = "1%";
  document.getElementById("bar-div").classList.remove('d-none');
    let stake_result = await nftStaking();
    return  stake_result;
  }
  
}

async function getStakedTokenMethod() {
  console.log("11111");
  var length = $('.capsulesSlider .item').length;
  for (var i = 0; i < length; i++) {
    $(".capsulesSlider").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
  }
  $('.nft-checkbox-btn').prop("checked", false);
  $('.category-checkbox-btn').prop("checked", false);
  nftID = '';
  categID = '';
  var length = $('.item').length;
  // for (var i=0; i<length; i++) {
  //     $(".vertical").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
  //    }
  const nfts = [];
  let jData;
  let gachyiFarm = await gachyilandFarm.methods.getStakedTokens(user).call({}, async function (error, result) {
    let val1, gachyiNFT,gachyiTime;
    if (error) {
      console.log(error);
    } else {
      stakedTokens = result;
      for (let i = 0; i < stakedTokens.length; i++) {
        let time;
        gachyiTime = await gachyilandFarm.methods.getTimeOfStaking(user, stakedTokens[i]).call({}, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            time = result;
            
          }
        })
         gachyiNFT = await gachyilandNFT.methods.tokenURI(stakedTokens[i]).call({}, async function (error, result) {
          if ( error) {
            console.log(error);
          } else {
            fetch(result).then((r)=>{r.text().then((htmlData)=>{
              jData = JSON.parse(htmlData);
              nfts.push({ NFTid: stakedTokens[i], time: time,image:jData.image})
              if(i ==stakedTokens.length-1){
                addInProgress(nfts,length);
              }
              })
            }).catch( e => { console.log(e); });

            // fetch(result + '.json', { mode: 'no-cors'})
            // fetch(result , { mode: 'no-cors'})
            //   // .then(response => response.json())
            //   .then(blob => blob.json())
            //   .then( jsondata => {
            //     jData=jsondata; 
            //      //not in used right now 
            //   }).catch( e => {
            //     console.log(e);
            //   });
          }
        })
      }
     
       
    
    }
  })
}
function addInProgress(nfts,length){
  nfts.sort(function(a, b){return b.time - a.time});
  console.log("nfts:",nfts);
  for (var i=0; i<length; i++) {
    $(".progress__slider .vertical").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
   }
  for (let i = 0; i < nfts.length; i++){
    console.log("3");
    let itemHTML = '<div class="item"><div class="goo__card"><div class="name__plate"><p>GOO GOO</p><h6>#' + nfts[i].NFTid + '</h6></div> <div class="profile__mage"><img src="'+nfts[i].image+'" class="img-fluid" alt=""></div> <div class="exploring"><div class="content"> <h2>EXPLORING</h2>  <div class="time__duration" id ="timeStaked_' + nfts[i].NFTid + '"><div class="days"> <span>' + Math.floor(nfts[i].time / 86400) + '</span> </div> <div class="hours"><span>' + Math.floor((nfts[i].time / 3600) % 24) + '</span></div><div class="minutes"><span>' + Math.floor(nfts[i].time % 3600 / 60) + '</span></div> </div> <div class="withdraw-div"><button class="withdraw-btn" onclick="withdrawReward(' + nfts[i].NFTid + ',' + nfts[i].time + ')"><img src="./assets/Images/new__withdraw.png" class="img-fluid" alt=""></button><button class="withdraw-btn" onclick="withdrawNFT(' + nfts[i].NFTid + ')"><img src="./assets/Images/NFTwithdraw.png" class="img-fluid" alt=""></button></div></div> </div></div></div>';
    $('.progress__slider .vertical').trigger('add.owl.carousel', [itemHTML]).trigger('refresh.owl.carousel');
  }

}
async function withdrawReward(nftID, time) {
  if(await chainIdCheck()){ 
  document.getElementById('nftIDWithdraw').innerText = "GOO GOO #" + nftID;
  let flag = true;
  for (let i = 0; i < categorylength && flag == true; i++) {
    try {
      withdrawstats = await gachyilandFarmSend.methods.harvest(nftID, i).estimateGas({ from: user, gasPrice: 200000000000 }, async function (err, result) {
        if (err) {
      
          let errore = err.toString()
          if (errore.indexOf('Internal JSON-RPC error.') > -1) {
            errore = errore.replace('\n', '').replace("Error: ", '').replace('Internal JSON-RPC error.', '')
            errore = JSON.parse(errore)
            console.log(errore.message);
            if(errore.message == "execution reverted: Cant harvest yet" || errore.message == "execution reverted: Nothing to harvest"){
              flag = false;
              console.log("nothing to harvest");
              document.getElementById('nftReward').innerText = "0 $PLMR";
              document.getElementById('callWithdrawReward').classList.add('d-none');
              await gachyilandFarm.methods.categories(i).call({}, function (err, result) {
                if (err) {
                  console.log("not working" + err);
                } else if (time < result[1]) {
                  console.log(time * 100 / result[1])
                  document.getElementById("progressbar2").style.width = time * 100 / result[1] + "%";
                } else {
                  console.log("it came here");
                  document.getElementById("progressbar2").style.width = "100%";
                }
    
              })
            }
          }
        } else {
          console.log("category id ____________>", i);
          flag = false;
          categID = i;
          await gachyilandFarm.methods.categories(categID).call({}, function (err, result) {
            if (err) {
              console.log("not working" + err);
            } else if (time < result[1]) {
              console.log(time * 100 / result[1])
              document.getElementById("progressbar2").style.width = time * 100 / result[1] + "%";
            } else {
              console.log("it came here");
              document.getElementById("progressbar2").style.width = "100%";
            }

          })
          await gachyilandFarm.methods.getAmountToHarvest(user, i, nftID).call({}, function (err, result) {
            if (err) {
              console.log("not working" + err);
            } else {
              document.getElementById('nftReward').innerText = (result / 1000000000000000000).toFixed(2) + "$PLMR";
              document.getElementById('callWithdrawReward').classList.remove('d-none');

              console.log("category id ____________>", flag);
            }
          })


        }
      })
    } catch (e) {
     
    }



  }
  console.log("clicked withdraw");
  $("#WithdrawRewardNFTID").val(nftID);
  $("#withdraw_reward_pop").modal('toggle');

  }


}
async function withdrawRewardFunctionCall() {
  if(await chainIdCheck()){ 
  $("#withdraw_reward_pop").modal('toggle');
  $('#pop2').modal({ backdrop: 'static', keyboard: false });
  $("#pop2").modal('toggle');
  document.getElementById('toggle-btn').classList.add('d-none');
  document.getElementById("progressStatus").innerText = 'In Progress';
  document.getElementById("progressbar").style.width = "1%"
  document.getElementById("bar-div").classList.remove('d-none');
  try {
    await gachyilandFarmSend.methods.harvest(document.getElementById('WithdrawRewardNFTID').value, categID).send({ from: user,gasPrice: 90000000000,gasLimit: 9000000 }, function (err, result) {
      if (err) {
        document.getElementById("progressStatus").innerText = 'Txn not completed';
        document.getElementById("toggle-btn").classList.remove('d-none');
        document.getElementById("bar-div").classList.add('d-none');
        document.getElementById("toggle-btn").innerText = 'okay';
      } else {
        console.log("rewards withdrawn" + result);
        document.getElementById("progressStatus").innerText = 'Half way through';
        document.getElementById("progressbar").style.width = "40%"
      }
    })
    await setTimeout("time out running ", 2000)
    document.getElementById("progressStatus").innerText = 'success';
    document.getElementById("progressbar").style.width = "100%"
    document.getElementById('toggle-btn').classList.remove('d-none');
    document.getElementById('toggle-btn').innerText = 'done'
    
  } catch (error) {
    if(error.toString().includes('Transaction was not mined within 50 blocks, please make sure your transaction was properly sent. Be aware that it might still be mined')){
      document.getElementById("progressStatus").innerText = 'Txn might get completed please check metamask';
        document.getElementById("toggle-btn").classList.remove('d-none');
        document.getElementById("bar-div").classList.add('d-none');
        document.getElementById("toggle-btn").innerText = 'okay';
    }
    return false;
    }
  }
}
async function withdrawNFT(nftID) {
  if(await chainIdCheck()){ 
  $('#pop2').modal({ backdrop: 'static', keyboard: false });
  $("#pop2").modal('toggle');
  let flag=true;
  document.getElementById("toggle-btn").classList.add('d-none');
  document.getElementById("progressbar").style.width = "1%"
  document.getElementById("bar-div").classList.remove('d-none');
  document.getElementById("progressStatus").innerText = 'In Progress';
  for (let i = 0; i < categorylength && flag==true; i++) {
    try {
      withdrawstats = await gachyilandFarmSend.methods.withdraw(nftID, i).estimateGas({ from: user, gasPrice: 200000000000 }, async function (e, result) {
        if (e) {
          let errore = e.toString()
          if (errore.indexOf('Internal JSON-RPC error.') > -1) {
            errore = errore.replace('\n', '').replace("Error: ", '').replace('Internal JSON-RPC error.', '')
            errore = JSON.parse(errore)
            if(errore.message == "execution reverted: Can't Withdraw before time limit"){
              flag=false;
              document.getElementById("progressStatus").innerText = "Quest incomplete. Withdrawal not available.";
              document.getElementById("toggle-btn").classList.remove('d-none');
              document.getElementById("bar-div").classList.add('d-none');
              document.getElementById("toggle-btn").innerText = 'okay';
            }
          }
          
        } else {
          flag= false;
          isRewardPending = await gachyilandFarm.methods.getAmountToHarvest(user, i, nftID).call({},async function (err, result) {
            if (result==0) {
              console.log("category id ______________________________________________>", nftID, i);
              document.getElementById("progressStatus").innerText = 'Approve txn';
              document.getElementById("progressbar").style.width = "33%"
              let withdrawTxn = await gachyilandFarmSend.methods.withdraw(nftID, i).send({ from: user,gasPrice: 90000000000,gasLimit: 9000000 }, function (err, result) {
                    if (err) {
                        document.getElementById("progressStatus").innerText = 'Txn not completed';
                        document.getElementById("toggle-btn").classList.remove('d-none');
                        document.getElementById("bar-div").classList.add('d-none');
                        document.getElementById("toggle-btn").innerText = 'okay';
                   } else {
                        document.getElementById("progressStatus").innerText = 'txn sent';
                        document.getElementById("progressbar").style.width = "66%";
                     }
                })
          if (withdrawTxn) {
            await getStakedTokenMethod();
            document.getElementById("progressStatus").innerText = 'success';
            document.getElementById("progressbar").style.width = "100%";
            document.getElementById("toggle-btn").innerText = 'okay'
            document.getElementById("toggle-btn").classList.remove('d-none');
            
          }
          } else {
              document.getElementById("progressStatus").innerText = 'Withdraw $PLMR first before you withdraw your Goo Goo!';
              document.getElementById("bar-div").classList.add('d-none');
              document.getElementById("toggle-btn").innerText = 'okay'
              document.getElementById("toggle-btn").classList.remove('d-none');
            }
          })
          
          
        }
      })

    } catch (error) {
      console.log("erooorr",error);
      continue;
    }

    break;
  }

  // document.getElementById("progressStatus").innerText = 'success';
  // document.getElementById("progressbar").style.width = "100%";

}
}








