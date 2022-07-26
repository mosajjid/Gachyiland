var contractINT = new Web3('https://polygon-mumbai.g.alchemy.com/v2/Z9Pn3WcHAkLtb7oVQO4EtySOKgEwoG5R');
let web3 = new Web3(Web3.givenProvider);
var gachyilandNFT;
var gachyilandFarm;
var gachyilandNFTSend;
var gachyilandFarmSend,access1155;
var user;
var categorylength = 5;
var categoryURI = [];
var tokenURI = [];
var stakedTokensURI = [];
var stakedTokens,nftIDs = [];
var nftID;
var categID;
let sliderHTML = "";
var gachyilandNFTAddress = "0x5453F05a2Be7DeFd8B1887bA6fb0c5ea45f80401";
var gachyilandNFTAbi = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint256", "name": "_maxTokenPerUser", "type": "uint256" }, { "internalType": "string", "name": "baseTokenURI_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "categoryId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "maxPerAddress", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "categoryTokenCap", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "isPrivate", "type": "bool" }, { "indexed": false, "internalType": "bool", "name": "isActive", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }], "name": "AddCategory", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "ReserveToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_address", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_tokenID", "type": "uint256" }], "name": "UnReserveToken", "type": "event" }, { "inputs": [], "name": "REVEAL_TIMESTAMP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "_categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "_isPrivate", "type": "bool" }, { "internalType": "bool", "name": "_isActive", "type": "bool" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "addCategory", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_categoryId", "type": "uint256" }], "name": "allowAddressToMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "allowMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "categories", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "uint256", "name": "maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "isPrivate", "type": "bool" }, { "internalType": "bool", "name": "isActive", "type": "bool" }, { "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_categoryId", "type": "uint256" }], "name": "disableAddressMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getReservedTokenOwners", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isAdminMintingDone", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastPublicTokenMinted", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTokensPerUser", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "internalType": "uint256", "name": "_quantity", "type": "uint256" }], "name": "mintTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "reserveToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "reservedTokenOwners", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_baseURILink", "type": "string" }], "name": "setBaseURILink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "setMaxTokensPerUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "revealTimeStamp", "type": "uint256" }], "name": "setRevealTimestamp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stopAdminMinting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokensMintedPerCategoryPerAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokensReserved", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "totalTokensMintedPerCategory", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }, { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "unreserveToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_categoryId", "type": "uint256" }, { "internalType": "uint256", "name": "_startTime", "type": "uint256" }, { "internalType": "uint256", "name": "_endTime", "type": "uint256" }, { "internalType": "uint256", "name": "_maxPerAddress", "type": "uint256" }, { "internalType": "uint256", "name": "_categoryTokenCap", "type": "uint256" }, { "internalType": "bool", "name": "_isPrivate", "type": "bool" }, { "internalType": "bool", "name": "_isActive", "type": "bool" }, { "internalType": "uint256", "name": "_price", "type": "uint256" }], "name": "updateCategory", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdrawETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

var accesso1155Address ="0x90CF3d98d77c828da91F0E9bb81E52339cf4a8f5";
var accesso1155Abi =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_customUri","type":"string"}],"name":"setCustomTokenUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];

const loader = document.getElementById('loader')
const cardSection = document.getElementsByClassName('capsulesSlider')[0];
window.userWalletAddress = null
const loginButton = document.getElementById('connectWallet')
const loginButtonMob = document.getElementById('connectWalletMob')
const userWallet = document.getElementById('userWallet')
const lastPageStaked = document.getElementById('lastPageStaked')


$(document).ready(function () {
  document.getElementById('quest__duration').style.paddingTop = $('#navbar__id').height() + 'px';
  loginButton.addEventListener('click', loginWithMetaMask);
  loginButtonMob.addEventListener('click', loginWithMetaMask);
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
})
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
  access1155 = new web3.eth.Contract(accesso1155Abi,accesso1155Address,{})
  gachyilandNFTSend = new web3.eth.Contract(gachyilandNFTAbi, gachyilandNFTAddress, {})
 
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
                let headers = new Headers();
      
                headers.append('Content-Type', 'application/json');
                // headers.append('Accept', 'application/json');
              
                headers.append('Access-Control-Allow-Origin', '*');
                // headers.append('Access-Control-Allow-Credentials', 'true');
              
                headers.append('GET', 'POST', 'OPTIONS');
            
              
                fetch(result, {
                    // mode: 'no-cors',
                    method: 'GET',
                    headers: headers
                  })
                  .then(response => {
                     return response.json()
                    
                  })
                  .then(json =>  {
                    json.myURL = result
                   
                    
                     tokenURI.push(json);
                     
                  
                  })
                  .catch(error => console.log(error));
                
              }
            })

          }
        });
      }
     
    }


  });

  // await categoryInfo();
  // await getStakedTokenMethod();
  document.getElementById('sub_btn').parentNode.disabled = true;
  document.getElementById('sub_btn').setAttribute("class", "greyScale");
  document.getElementById('sub_btn_2').parentNode.disabled = true;
  document.getElementById('sub_btn_2').setAttribute("class", "greyScale");
  nxt_btn.parentNode.disabled = true;
  nxt_btn.classList.add("greyScale");


  //slick slider vertical

  loader.classList.add("d-none");
}
async function categoryInfo(nID) {
  let ownerCheck = await access1155.methods.balanceOf(user,nID).call({},async function (error, result) {
    if (error) {
      console.log(error);
    } else {
      if(result!=0){
        let cat = await access1155.methods.uri(nID).call({}, function (error, result) {
          if (error) {
            console.log(error);
          } else {
            fetch(result)
            .then(async (response) =>response.json())
            .then( jsondata => {
              jsondata.myURL =result
              dispCategory(jsondata);
               //not in used right now 
            }).catch(err => {
                console.error(err);
              //   setTimeout(function() {
              //     getStakedTokenMethod2(tokenID)
              // }, 4000)
          });
    
          }
        });
      }else{
        console.log("not holding :",nID);
      }
    }
  });
  

    
  }


function dispCategory(nfts) {
  // var length = $('.capsulesSlider__duration .item').length;
  // console.log("capsulesSlider__duration Items" + length);
  // for (var i = 0; i < length; i++) {
  //   $(".capsulesSlider__duration").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
  // }

  $('.capsulesSlider__duration').trigger('add.owl.carousel', createCardAccessories(nfts)).trigger('refresh.owl.carousel');
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
  checkboxBtn.setAttribute("value", data.myURL);
  btn.append(checkboxBtn);

  check.append(btn);

  item.append(card);
  return item;

}
function createCardAccessories(data) {
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
  btn.className = 'category_type';
  btn.setAttribute("onclick", "categoryCheckbox(event,this, 'categoryCheckbox_" +data.edition+ "')");

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
  checkboxBtn.setAttribute("id", "categoryCheckbox_" + data.edition);
  checkboxBtn.setAttribute("class", "category-checkbox-btn");
  checkboxBtn.setAttribute("value",data.myURL)
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
  img.src = "./assets/Images/Goo__card_image_2.png";
  // data.image;
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
  nftID='';

  } else {
    var IsChecked = $('.nft-checkbox-btn:checkbox:checked').length > 0;
    if (IsChecked) {
      nxt_btn.removeAttribute("class", "greyScale");
      // $('#pop2').modal({backdrop: 'static', keyboard: false});
      $("#pop2").modal('toggle');

      document.getElementById("progressStatus").innerText = 'please select one NFT at a time';
      document.getElementById('toggle-btn').classList.remove('d-none');
      document.getElementById('bar-div').classList.add('d-none');
      document.getElementById("toggle-btn").innerText = 'okay';
    } else {
      el.parentNode.classList.toggle("active_btn");
      nxt_btn.parentNode.disabled = false;
      document.getElementById(checkId).setAttribute("checked", "checked");
      nftID=document.getElementById(checkId).value;
      nxt_btn.classList.remove("greyScale");
   

    }
  }
  console.log(nftID);
  if (nftID=="") {
    nxt_btn.parentNode.disabled = true;
    nxt_btn.classList.add("greyScale");
  }
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

      document.getElementById("progressStatus").innerText = 'Item already selected';
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

function secondsToHms(d) {
  d = Number(d);
  var days = Math.floor(d / 86400)
  return days;
}
function rewardCalc(price) {
  return price / 1000000000000000000;
}








