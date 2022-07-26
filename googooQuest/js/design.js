var firstPanel = document.getElementById("connect");
var secondPanel = document.getElementById("begin");
var thirdPanel = document.getElementById("choose__goo");
var noGoo = document.getElementById("no__goo");
var fourthPanel = document.getElementById("cap__duration");
var fifthPanel = document.getElementById("progress");
let mintedTokenID;


async function beginJourny() {
    secondPanel.classList.add("d-none");
    if (stakedTokensURI.length == 0 && tokenURI.length == 0) {
        noGoo.classList.remove("d-none");
    } else {
        await addNFT();
        await addstakeNFT();
        thirdPanel.classList.remove("d-none");
    }
}

async function duration() {
    document.body.style.overflow = 'hidden';
    loader.classList.remove("d-none");
    await fetchCompatibility()   
}

    async function getStakedTokenMethod2(tokenID) {       
        $('.nft-checkbox-btn').prop("checked", false);
        $('.category-checkbox-btn').prop("checked", false);
                fetch(tokenID)
                      .then(async (response) =>response.json())
                      .then( jsondata => {
                        imputNFT(jsondata);
                         //not in used right now 
                      }).catch(err => {
                          console.error(err);
                    });
                  }
            
    function imputNFT(nfts){
                
            let itemHTML = '<div class="item"><div class="goo__card"><div class="name__plate"><p>GOO GOO</p><h6>#' + nfts.edition + '</h6></div> <div class="profile__mage"><img src="'+nfts.image+'" class="img-fluid" alt=""></div> <div class="exploring"><div class="content"> <h2>EXPLORING</h2>  <div class="time__duration" id ="timeStaked_' + nfts.edition + '"><div class="days"> <span>20</span> </div> <div class="hours"><span>10</span></div><div class="minutes"><span>10</span></div> </div> <div class="withdraw-div"><button class="withdraw-btn" onclick="withdrawReward()"><img src="./assets/Images/new__withdraw.png" class="img-fluid" alt=""></button><button class="withdraw-btn" onclick="withdrawNFT()"><img src="./assets/Images/NFTwithdraw.png" class="img-fluid" alt=""></button></div></div> </div></div></div>';
            $('.progress__slider .vertical').trigger('add.owl.carousel', [itemHTML]).trigger('refresh.owl.carousel');
          }
function duration__back() {
    categID = '';
    secondPanel.classList.remove("d-none");
    var length = $('.item').length;
    for (var i = 0; i < length; i++) {
        $(".capsulesSlider").trigger('remove.owl.carousel', [i])
            .trigger('refresh.owl.carousel');
    }
    noGoo.classList.add("d-none");
    thirdPanel.classList.add("d-none");
}

async function last() {

    if (chainIdCheck()) {
            await burnNFT();
        }
        }
        async function burnNFT() {
            document.getElementById("progressStatus").innerText = 'please approve';
            document.getElementById("progressbar").style.width = "1%"
        
            document.getElementById('bar-div').classList.remove('d-none');
            $('#pop2').modal({ backdrop: 'static', keyboard: false });
            $("#pop2").modal('toggle')
            document.getElementById("toggle-btn").classList.add('d-none');
            let nftBurnStatus = await access1155.methods.burn(user, categID.split('/').slice(-1)[0],1).send({ from: user ,gasPrice: 90000000000,gasLimit: 9000000}, function (err, txn) {
                if (err) {
                    document.getElementById("progressStatus").innerText = 'Txn not completed';
                    document.getElementById("toggle-btn").classList.remove('d-none');
                    document.getElementById("bar-div").classList.add('d-none');
                    document.getElementById("toggle-btn").innerText = 'okay';
                } else {
                    document.getElementById("progressStatus").innerText = 'approval sent';
                    document.getElementById("progressbar").style.width = "33%"
                }
            })
            if (nftBurnStatus) {

                await sendApi();
                document.getElementById("progressbar").style.width = "66%"
                document.getElementById("progressStatus").innerText = 'merging in process';
            }
        }

async function sendApi(){

    

    const data = {
        nftURL: nftID,
        accessoryURL: categID
    }
    let headers = {}, body;
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data)
    fetch('http://127.0.0.1:4000/merge', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin', // include, *same-origin, omit
        'headers': headers,
        body
    }).then((response) =>response.json())
    .then(stats =>{
        if(stats.status=="failed"){
            document.getElementById("progressStatus").innerText = 'wrong pair selected';
            document.getElementById("toggle-btn").classList.remove('d-none');
            document.getElementById("bar-div").classList.add('d-none');
            document.getElementById("toggle-btn").innerText = 'okay';
            $('#pop2').modal({ backdrop: 'static', keyboard: false });
            $("#pop2").modal('toggle')
    
        }else{
            getStakedTokenMethod2(nftID)

            fourthPanel.classList.add("d-none");
            fifthPanel.classList.remove("d-none");
            document.getElementById("progressbar").style.width = "100%"
            document.getElementById("progressStatus").innerText = 'merge complete';
            document.getElementById("toggle-btn").innerText = 'thanks'
            document.getElementById("toggle-btn").classList.remove('d-none');

        }
    })

}
async function fetchCompatibility(){
    const data = {
        nftURL: nftID
    }
    let headers = {}, body;
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data)
    fetch('http://127.0.0.1:4000/compatability', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin', // include, *same-origin, omit
        'headers': headers,
        body
    }).then((response) =>response.json())
    .then(stats =>{
       
        
        if(stats.status=="failed"){
            document.getElementById("progressStatus").innerText = 'non Existent Token';
            document.getElementById("toggle-btn").classList.remove('d-none');
            document.getElementById("bar-div").classList.add('d-none');
            document.getElementById("toggle-btn").innerText = 'okay';
            $('#pop2').modal({ backdrop: 'static', keyboard: false });
            $("#pop2").modal('toggle')
            loader.classList.add("d-none");
            document.body.style.overflow = 'auto';
    
        }else{
            stats.map(obj =>{
                categoryInfo(obj.nft_ID);
            })
            loader.classList.add("d-none");
             document.body.style.overflow = 'auto';
            fourthPanel.classList.remove("d-none");
    thirdPanel.classList.add("d-none");

        }
    })


}
async function lastToFirst() {
    document.body.style.overflow = 'hidden';
    loader.classList.remove("d-none");
    await dataGather();


    loader.classList.add("d-none");
    document.body.style.overflow = 'auto';
    fifthPanel.classList.add("d-none");
    secondPanel.classList.remove("d-none");

}

function last__back() {
    thirdPanel.classList.remove("d-none");
    var length = $('.item').length;
    for (var i = 0; i < length; i++) {
        $(".capsulesSlider__duration").trigger('remove.owl.carousel', [i])
            .trigger('refresh.owl.carousel');
    }
    fourthPanel.classList.add("d-none");
}

async function viewProgress() {
    // runverticalslider();

    // lastPageStaked.innerHTML = sliderHTML;

    fifthPanel.classList.remove("d-none");
    secondPanel.classList.add("d-none");


}