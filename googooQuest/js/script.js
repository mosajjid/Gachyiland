
$('.capsulesSlider').owlCarousel({
    // loop: true,
    // nav: true,
    // items: 1,

    //  loop: true,
    margin: 60,
    nav: true,
    // center:true,
    
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    navText: ["<img src='./assets/Images/left__button.png'>", "<img src='./assets/Images/right__button.png'>"],
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        680: {
            items: 2,
            margin: 10,
        },
        800: {
            items: 2,
            // loop: false,
            margin: 10,
        },
        1000: {
            items: 3,
            // loop: false,
            margin: 10,
        },
        1300: {
            items: 4,
            // loop: false,
            margin: 10,
        }
    }

})
$('.splice__slider').owlCarousel({
    // loop: true,
    // nav: true,
    // items: 1,

    // loop: true,
    margin: 60,
    nav: true,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    navText: ["<img src='./assets/Images/left__button.png'>", "<img src='./assets/Images/right__button.png'>"],
    responsive: {
        0: {
            items: 1,
            margin: 5,
        },
        680: {
            items: 2,
            margin: 5,
        },
        800: {
            items: 3,
            loop: false,
            margin: 5,
        },
        1200: {
            items: 5,
            loop: false,
            margin: 5,
        },
        1600: {
            items: 5,
            loop: false,
            margin: 5,
        }
    }

})

$('.capsulesSlider__duration').owlCarousel({
    // loop: true,
    // nav: true,
    // items: 1,

    loop: false,
    margin: 60,
    nav: true,
    navText: ["<img src='./assets/Images/left__button.png'>", "<img src='./assets/Images/right__button.png'>"],
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        660: {
            items: 2,
            margin: 10,
        },
        980: {
            items: 3,
            // loop: false,
            margin: 10,
        },
        1280: {
            items: 4,
            // loop: false,
            margin: 10,
        },
        1600: {
            items: 5,
            // loop: false,
            margin: 10,
        }
    }

})

$('.vertical').owlCarousel({
  // loop: true,
  // nav: true,
  // items: 1,

  loop: false,
  margin: 60,
  nav: true,
  // navText: ["<img src='./assets/Images/left__button.png'>", "<img src='./assets/Images/right__button.png'>"],
  responsive: {
      0: {
          items: 1,
          margin: 10,
      },
      660: {
          items: 2,
          margin: 10,
      },
      980: {
          items: 3,
          // loop: false,
          margin: 10,
      },
      1280: {
          items: 4,
          // loop: false,
          margin: 10,
      },
      1600: {
          items: 4,
          // loop: false,
          margin: 10,
      }
  }

})