var firstPanel = document.getElementById("connect");
var secondPanel = document.getElementById("begin");
var thirdPanel = document.getElementById("choose__goo");
var noGoo = document.getElementById("no__goo");
var fourthPanel = document.getElementById("cap__duration");
var fifthPanel = document.getElementById("progress");


function loaderClosed(){
    document.body.style.overflow = 'auto'; 
    loader.classList.add("d-none");
    console.log("inloader");
}
async function beginJourny() {
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");
    setTimeout(loaderClosed, 5000);
    secondPanel.classList.add("d-none");
    if(stakedTokensURI.length == 0 && tokenURI.length ==0){
        noGoo.classList.remove("d-none");
    }else 
    {
        await  addNFT();
        await addstakeNFT();
        thirdPanel.classList.remove("d-none");

    }
   
}

function duration(){
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");

    dispCategory();

    setTimeout(loaderClosed, 5000);
    
    
    fourthPanel.classList.remove("d-none");
    thirdPanel.classList.add("d-none");
}

function duration__back(){
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");
    nxt_btn.parentNode.disabled = true;
    nxt_btn.classList.add("greyScale");

    // dataGather();

    setTimeout(loaderClosed, 5000);
    
    categID='';
    secondPanel.classList.remove("d-none");
    var length = $('.item').length;
    for (var i=0; i<length; i++) {
        $(".capsulesSlider").trigger('remove.owl.carousel', [i])
                                 .trigger('refresh.owl.carousel');
    }
    noGoo.classList.add("d-none");
    thirdPanel.classList.add("d-none");
}

async function last() {
    document.getElementById('sub_btn').parentNode.disabled = true;
    document.getElementById('sub_btn').setAttribute("class", "greyScale");
    document.getElementById('sub_btn_2').parentNode.disabled = true;
    document.getElementById('sub_btn_2').setAttribute("class", "greyScale");
    if(chainIdCheck()){  
        
    let isStaked =await stakeNFT();
   console.log("last part",isStaked);
    if(isStaked){
        
        fourthPanel.classList.add("d-none");
        fifthPanel.classList.remove("d-none");
        document.getElementById('sub_btn').parentNode.disabled = false;
        document.getElementById('sub_btn').removeAttribute("class", "greyScale");
        document.getElementById('sub_btn_2').parentNode.disabled = false;
        document.getElementById('sub_btn_2').removeAttribute("class", "greyScale");
    }
    }
   
    return false;
}
function lastScreen(){       
    console.log("got into the last sceen"); 
        fourthPanel.classList.add("d-none");
        fifthPanel.classList.remove("d-none");
        document.getElementById('sub_btn').parentNode.disabled = false;
        document.getElementById('sub_btn').removeAttribute("class", "greyScale");
        document.getElementById('sub_btn_2').parentNode.disabled = false;
        document.getElementById('sub_btn_2').removeAttribute("class", "greyScale");
}
async function lastToFirst(){
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");
  
    await dataGather();
    
    
    loader.classList.add("d-none");  
    document.body.style.overflow = 'auto'; 
    fifthPanel.classList.add("d-none");
    secondPanel.classList.remove("d-none");

}

function last__back() {
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");
        var length = $('.item').length;
        for (var i=0; i<length; i++) {
            $(".capsulesSlider__duration").trigger('remove.owl.carousel', [i])
                                    .trigger('refresh.owl.carousel');
                                    }

        

    setTimeout(loaderClosed, 5000);
    thirdPanel.classList.remove("d-none");
    fourthPanel.classList.add("d-none");
}

async function viewProgress(){
    document.body.style.overflow = 'hidden'; 
    loader.classList.remove("d-none");


    setTimeout(loaderClosed, 5000);
    fifthPanel.classList.remove("d-none");
    secondPanel.classList.add("d-none");
    
}