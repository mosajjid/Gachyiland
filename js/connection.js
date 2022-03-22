async function web3Connection() {
    //toastr["error"]('<strong>Attention!</strong> Detecting Metamask');
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            web3 = new Web3(web3.currentProvider);
            ethereum.autoRefreshOnNetworkChange = false;
            var ee = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            // console.log(ee);        
            // Acccounts now exposed        
            if (ee != undefined) {
                // console.log("inside the try part!!");
                const provider = window['ethereum']; //user account address & network id 
                // console.log(provider.selectedAddress);          
                // console.log(provider.networkVersion); 
                var network = provider.networkVersion;
                console.log(network);
                if (network == undefined || network == null) {
                    try {
                        //   var networkTemp = await App.getNetwork();
                        //   network = networkTemp.result;
                    } catch (e) {
                        toastr["error"]('<strong>Attention!</strong> MetaMask Not Found! Click & Install. <button class="btn btn-warning pull-center   btn-sm RbtnMargin" type="button" id="alert_btn"><a href="https://metamask.io/" target="_blank" style="color:Black;text-decoration: none !important;">Download MetaMask</a></button>');
                        return;
                    }
                }
                switch (network) {
                    case "1":
                        networkName = "MainNet";
                        break;
                    case "2":
                        networkName = "Morden";
                        break;
                    case "3":
                        networkName = "Ropsten";
                        break;
                    case "4":
                        networkName = "Rinkeby";
                        break;
                    case "42":
                        networkName = "Kovan";
                        break;
                    case "56":
                        networkName = "BSC Mainnet";
                        break;
                    default:
                        networkName = "Unknown";
                }

                if (web3 && network == 80001 && ee != undefined) {
                    console.log('Successfully connected ');
                    console.log(web3);
                    let accounts = await web3.eth.getAccounts();
                    sWalletAddress = accounts[0].toString();
                    window.localStorage.setItem("sWalletAddress",sWalletAddress);
                    //console.log(truncate);
                    window.location.replace(window.location.href);
                } else if (web3 || network != 80001 || ee == undefined) {
                    toastr["error"]('<strong>Attention!</strong> Please connect MetaMask on <b>Polygon Testnet</b> You are on ' + networkName + '.');
                }
            }
        } catch (error) {
            console.log(error);
            if (error.code == 4001) {
                toastr["error"]('<strong>Attention!</strong> Please approve Metamask connection request to use our platform. <button class="btn btn-warning pull-center   btn-sm RbtnMargin" type="button" onclick="web3Connection()">Connect</button>');
            } else {
                toastr["error"]('<strong>Attention!</strong> Please approve Metamask connection request to use our platform. <button class="btn btn-warning pull-center   btn-sm RbtnMargin" type="button" onclick="web3Connection()">Connect</button>');
            }
        }
    }
    // Non-dapp browsers...
    else {
        toastr["error"]('<strong>Attention!</strong> MetaMask Not Found! Click & Install. <button class="btn btn-warning pull-center   btn-sm RbtnMargin" type="button" id="alert_btn"><a href="https://metamask.io/" target="_blank" style="color:Black;text-decoration: none !important;">Download MetaMask</a></button>');
    }
}
function Logout(){
    window.localStorage.removeItem("sWalletAddress","");
    window.location.replace(window.location.href);
}
//Detect account or chain switch
try {
    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.href = '/';
    });
    window.ethereum.on('chainChanged', function () {
        window.location.href = '/';
    });
} catch (error) {
    console.log(error);
}
if(!window.localStorage.getItem("sWalletAddress"))
{
    //web3Connection();
    document.getElementById("connectWallet").innerText = "Connect";
    document.getElementById("connectWallet").setAttribute('onclick',  'web3Connection();');
    
    document.getElementById("connectWalletMob").setAttribute('onclick',  'web3Connection();');
}
else
{
    document.getElementById("connectWallet").innerText = "Connected: ..."+window.localStorage.getItem("sWalletAddress").slice(-5);
    document.getElementById("connectWallet").setAttribute('onclick',  'Logout();');
    document.getElementById("connectWalletMob").setAttribute('onclick',  'Logout();');
    
}
console.log(window.localStorage.getItem("sWalletAddress"));

