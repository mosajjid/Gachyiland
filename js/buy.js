const abi = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_maxTokenPerUser","type":"uint256"},{"internalType":"string","name":"baseTokenURI_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"categoryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxPerAddress","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"categoryTokenCap","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isPrivate","type":"bool"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"AddCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_categoryId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"ReserveToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"UnReserveToken","type":"event"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_maxPerAddress","type":"uint256"},{"internalType":"uint256","name":"_categoryTokenCap","type":"uint256"},{"internalType":"bool","name":"_isPrivate","type":"bool"},{"internalType":"bool","name":"_isActive","type":"bool"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_categoryId","type":"uint256"}],"name":"allowAddressToMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"allowMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"categories","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"maxPerAddress","type":"uint256"},{"internalType":"uint256","name":"categoryTokenCap","type":"uint256"},{"internalType":"bool","name":"isPrivate","type":"bool"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_categoryId","type":"uint256"}],"name":"disableAddressMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAdminMintingDone","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastPublicTokenMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokensPerUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_categoryId","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mintTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reserveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"reservedTokenOwners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURILink","type":"string"}],"name":"setBaseURILink","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxTokensPerUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"revealTimeStamp","type":"uint256"}],"name":"setRevealTimestamp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopAdminMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokensMintedPerCategoryPerAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokensReserved","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalTokensMintedPerCategory","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"unreserveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_categoryId","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_maxPerAddress","type":"uint256"},{"internalType":"uint256","name":"_categoryTokenCap","type":"uint256"},{"internalType":"bool","name":"_isPrivate","type":"bool"},{"internalType":"bool","name":"_isActive","type":"bool"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updateCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const contractsAddr = "0x687C41EB31Fe1d67E4650b58F211dCfb1716BB45";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractsAddr, abi, signer);

const minPrice = new ethers.utils.parseEther("0.01");

const voucher = {
    presale: true,
    cid: 'ok',
    minPrice: minPrice,
    signature: '0x8cd7af2635615a1efa34adfbb13d9e02d7da692ebfd789aa07922a77f1730ff55b63b3d9a4f6f72575e49afe067fcd0ec35199cfeacbd4333706db9d82fe3a7c1c'
}

const ethEnabled = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        return window.web3;
    }// Legacy dapp browsers...
    else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');
        return web3;
    }
    console.log("false: eth not enabled");
    // return false;
}

async function checkRange() {

    let range = await contract.totalSupply();
    const numberOfTokens = 1;
    let saleStatus = await contract.isAdminMintingDone();
    if(!saleStatus)
    {
       //document.getElementById("timer-section").classList.remove("d-none");
    }
    //
    // const maxPerAddress = await contract.categories(1);
    // console.log("cat check:"+maxPerAddress);
    //const cat = maxPerAddress.split(",");
    //localStorage("maxTokensPerWallet",cat[3]);
    //console.log("NFTs Bought:"+range);
    document.getElementById("nftBought").innerHTML = `${range}`;
    //set number of tokens to buy
    document.getElementById("amountofTokens").value = `${numberOfTokens}`;
    //set initial value of number of tokens
    document.getElementById("nftQ").innerHTML = localStorage.getItem('numberOfTokens');
}

checkRange();

let total = 1;
let allowedGhoulies = 5;


function inc() {
    if (total < allowedGhoulies) {
        total = total + 1;
    }
    document.getElementById("quantity-value").innerHTML = total;
}

function dec() {
    if (total > 1) {
        total = total - 1;
    }

    document.getElementById("quantity-value").innerHTML = total;
}

async function transactionTrack(txHash)
{
    
    await web3.eth.getTransactionReceipt(txHash)
                .then((receipt) => {
                    if(receipt)
                    {
                        if (receipt.status === true) {
                            document.getElementById('buybtn').innerHTML = "SUCCESS !"
                            document.getElementById('buybtn').onclick = "";
                        }
                        else if (receipt.status === false) {
                            document.getElementById('buybtn').innerHTML = "Error, make sure you have enough funds or reload the page and try again.";
                            document.getElementById('buybtn').onclick = "";
                        }
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                });
}

async function Batchbuy() {

    if(!window.localStorage.getItem("sWalletAddress"))
    {
        toastr["error"]("Please connect your wallet.");
        throw new Error("Metamask not connected.")
    }
    const web3 = await ethEnabled();
    let total = document.getElementById("amountofTokens").value;
    
    
    //document.getElementById('buybtn').innerHTML = "Processing !"
    let value = 0;
    for (i = 0; i < total; i++) {
        value = value + 0.01;
    }
    const minPrices = new ethers.utils.parseEther(value.toString());

    // console.log(vouchers)
    // console.log(value)
    const nftContract = new web3.eth.Contract(abi, contractsAddr);


    const accounts = await web3.eth.getAccounts();

    document.getElementById("transactionLoader").style.display = "flex";;
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    const b = await nftContract.methods.mintTokens(0,total).send({from: accounts[0], value: ethers.utils.parseEther(value.toString())})
        .on('receipt', (receipt) => {
            toastr["success"]("Buy Transaction Has Been Mined!");
            // setTimeout(() => {
            //     window.location.href = '/';
            // }, 1000);
        })
        .catch((error) => {
            console.log(error);
            //$("#checkout").prop("disabled", false);
            toastr["error"]((error.code == 4001) ? "You Denied MetaMask Transaction Signature" : "Something Went Wrong!");
        });

    document.getElementById("transactionLoader").style.display = "none";;
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    console.log(b);
}


document.getElementById('buybtn').onclick = Batchbuy;
document.getElementById('buyMatics').onclick = () => {
    //window.location.href = '/';
    window.open(
        'https://beta.transak.com/',
        '_blank' // <- This is what makes it open in a new window.
      );
}