$('.capsulesSlider').owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    navText: ["<img src='./images/prev.svg'>", "<img src='./images/next.svg'>"]

})
$('.roadMapSlider').owlCarousel({
    loop: true,
    margin: 60,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        600: {
            items: 2,
            margin: 10,
        },
        1000: {
            items: 3,
            loop: false,
            margin: 60,
        }
    }
})

$('.roadMapSlider-video').owlCarousel({
    loop: true,
    margin: 60,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        600: {
            items: 1,
            margin: 10,
        },
        1000: {
            items: 1,
            loop: false,
            margin: 10,
        }
    }
})

$('.roadMapSlider-buy-now').owlCarousel({
    // loop: true,
    margin: 60,
    responsive: {
        0: {
            items: 2,
            margin: 18,
        },
        600: {
            items: 3,
            margin: 8,
        },
        1000: {
            items: 5,
            loop: false,
            margin: 8,
        },
        1200: {
            items: 5,
            loop: false,
            margin: 8,
        }
    }
})

$('.postSlider').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
            loop: false
        }
    }
})
$(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    var maxHeight = 0;

    $(".equaldiv").each(function(){
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $(".equaldiv").height(maxHeight);

});
$(document).click(function (event) {
    $(".navbar-collapse").collapse('hide');
});

$(window).scroll(function(){
    var isElementInView = Utils.isElementInView($('footer'), false);
    if (isElementInView) {
        $('.fixedrightBottom').addClass('d-none');
    } else {
        $('.fixedrightBottom').removeClass('d-none');
    }
});

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

$('.founder__link').click(function(e){
    e.preventDefault();
    $('.founder__link').removeClass('choosen');
    $(this).addClass('choosen');
    var target = $(this).data('target');

    $('.founder__info').removeClass('shown');
    $('.founder__info#'+target).addClass('shown');

    var scrollTo = $(".founder__info__cnt").offset().top - 100;
    $([document.documentElement, document.body]).animate({
        scrollTop: scrollTo
    }, 1000);
});


$('.partner__link').click(function(e){
    e.preventDefault();
    // $('.founder__link').removeClass('choosen');
    // $(this).addClass('choosen');
    var target = $(this).data('target');

    $('.partner__info__cnt .founder__info').removeClass('shown');
    $('.partner__info__cnt .founder__info#'+target).addClass('shown');

    var scrollTo = $(".partner__info__cnt").offset().top - 100;
    $([document.documentElement, document.body]).animate({
        scrollTop: scrollTo
    }, 1000);
});

$(document).ready(function(){

    $('.roadMapSlider-video .item').each(function(){
        var $this = $(this);
        var handle = $(this).find('.playerHandle');
        handle.click(function(e){
            e.preventDefault();
            var player = new Vimeo.Player($this.find('.vimeovid1'));
            //var player = document.getElementById("vimeovid1");
            if($(this).hasClass('paused'))
            {
                player.play();
            }
            else
            {
                player.pause();
            }
            $(this).toggleClass("paused");
        });
    });


    $("#contact__us__now").submit(function() {
        $this = $(this);
        var fname = $("#form_fname").val();
        var lname = $("#form_lname").val();
        var email = $("#form_email").val();
        var issus = $("#form_issues").val();
        var messg = $("#form_message").val();
        var dataString = 'name='+ fname+' '+lname + '&email=' + email + '&messg=' + messg + '&issues=' +issus;
        console.log(dataString);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: dataString,
            beforeSend: function(){  $("#contact__us__now .loading").css('display','flex'); $this.attr('disabled','disabled'); },
            success: function(res){
                $('#snackbar').text(res);
                $('#snackbar').addClass('show');
                $('#contact__us__now').trigger("reset");
                setTimeout(function(){$('#snackbar').removeClass('show'); }, 3000);
                $("#contact__us__now .loading").css('display','none'); 
                $this.removeAttr('disabled');
            }
        });

        return false;
    });

});


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

const totelMatic = document.getElementById("total-matic");

const matic = document.getElementById("matic");

const nft = document.getElementById("nft");

var a = ' &nbsp ' + '200';

var b = ' &nbsp ' + '400';

var c = ' &nbsp ' + '600';

document.getElementById("total-matic").innerText = 1;

function timesOne(){
    let existing = document.getElementById("nftQ").innerText;
    let currentNumber = parseInt(existing);

    document.getElementById("nftQ").innerText = 1;
    document.getElementById("maticA").innerText = 1 * 0.01;
    document.getElementById("amountofTokens").value = 1;
    let totalMatic = " " + 1;
    document.getElementById("total-matic").innerText = totalMatic;
}

function timesTwo(){
    let existing = document.getElementById("nftQ").innerText;
    let currentNumber = parseInt(existing);

    document.getElementById("nftQ").innerText = 2;
    document.getElementById("maticA").innerText = 2 * 0.01;
    document.getElementById("amountofTokens").value = 2;
    let totalMatic = " " + 2;
    document.getElementById("total-matic").innerText = totalMatic;
}

function timesThree(){
    let existing = document.getElementById("nftQ").innerText;
    let currentNumber = parseInt(existing);

    document.getElementById("nftQ").innerText = 3;
    document.getElementById("maticA").innerText = 3 * 0.01;
    document.getElementById("amountofTokens").value = 3;
    let totalMatic = " " + 3;
    document.getElementById("total-matic").innerText = totalMatic;
}


// likes counter
var counter = 0;
const likes = document.getElementById("likes");
var totelLikes = 2133;
likes.innerHTML = totelLikes;

function like(){
    counter++;
    liking();
}

function liking(){
    if(counter === 1){
        totelLikes++;
        likes.innerHTML = totelLikes;
    } else if(counter === 2){
        likes.innerHTML = totelLikes;
    }
}

