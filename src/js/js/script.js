// SCROLLMAGIC

const sections = Array.from(document.querySelectorAll('.inner-container'));
const fragments = Array.from(document.querySelectorAll('fragment'));

const footer = document.querySelector('footer');

var controller = new ScrollMagic.Controller();

// sections.forEach((section, i) => {
//     console.log(section.querySelector('h1'));
//     section.classList.add('not-visible');
//     var myScene = new ScrollMagic.Scene({
//             triggerElement: section,
//             triggerHook: .9,
//             reverse: false
//         })
//         .setClassToggle(section, 'appear')
//         .addTo(controller);
//     if (section.classList.contains('appear')) {
//         var wait = setTimeout(() => {
//             section.classList.remove('not-visible');
//         }, 2000)
//     }
// })

sections.forEach((section, i) => {
    const title = section.querySelector('h1');
    const txtWrap = section.querySelector('.text_wrap');
    const txtSect = section.querySelector('.text_section');
    const imgWrap = section.querySelector('.img_wrap');

    TweenLite.set(txtSect, {
        transformOrigin: '0% 50%'
    });

    const tween1 = TweenMax.from(title, 0.5, {
        x: '-=100',
        autoAlpha: 0,
        ease: Power2.easeIn
    }, 'slika');

    const tween2 = TweenMax.from(imgWrap, 1, {
        y: 20,
        autoAlpha: 0
    }, '-=0.2');

    const tween3 = TweenMax.from(txtSect, 0.5, {
        scaleX: 0,
        ease: Power4.easeIn
    }, '-=1')

    const tween4 = TweenMax.from(txtWrap, 1, {
        autoAlpha: 0,
        y: -20
    })

    const myAnim = new TimelineMax().add(tween1).add(tween2).add(tween3).add(tween4);



    var myScene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: .9,
            reverse: false
        })
        .setTween(myAnim)
        .addTo(controller);
})

// footer.children[0].classList.remove('not-visible');

fragments.forEach(fragment => {
    const elements = Array.from(fragment.children);
    elements.forEach(element => {
        TweenLite.set(element, {
            y: 50,
            opacity: 0
        });
        var myScene2 = new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: .9,
                reverse: false
            })
            .setClassToggle(element, 'appear')
            .addTo(controller);
    });

})

// SVAKI POJEDINACNI ELEMENT
// sections.forEach((section, i) => {
//     const childrens = (Array.from(section.children));
//     childrens.forEach(child => {
//         child.classList.add('not-visible');
//         var myScene = new ScrollMagic.Scene({
//                 triggerElement: child,
//                 triggerHook: 1
//             })
//             .setClassToggle(child, 'appear')
//             .addTo(controller);
//     })

// })


// SMOTH SCROLLING

const box = document.querySelector('.text_section');
const img = document.querySelector('.img_wrap');
const boxes = Array.from(document.querySelectorAll('.text_section'));


// if(window.innerWidth > 800){ }
    var html = document.querySelector("#scroll-container");
    var body = document.body;

    var scroller = {
        target: html,
        ease: (window.innerWidth > 800)? 0.06: 1, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
        };
        
        var requestId = null;
        
        TweenLite.set(scroller.target, {
            // rotation: 0.01,
            // force3D: true
        });
        
    window.addEventListener("load", onLoad);

    function onLoad() {
        updateScroller();
        window.focus();
        window.addEventListener("resize", onResize);
        document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {

        var resized = scroller.resizeRequest > 0;

        if (resized) {
            var height = scroller.target.clientHeight;
            body.style.height = height + "px";
            scroller.resizeRequest = 0;
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }


//BOX SCROLL FUNCTION

function onScroll() {
    scroller.scrollRequest++;
    const pos = (box)? box.getBoundingClientRect() : null;

    boxes.forEach(box => {
        TweenLite.to(box, 1.5, {
            ease: Power4.easeOut,
            y: `${pos.top/19}px`
        })
    })

    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

// ANIMATECSS ADDING CLASS 


$(function () {

    function animate(element, animation) {
        $(element).addClass('animated ' + animation);
        var wati = setTimeout(() => {
            $(element).removeClass('animated ' + animation)
        }, 1000)
    }

});

// SCROLL TO NAVIGATION

const navigation = document.querySelector('.nav');

const navItems = navigation.querySelectorAll('a');

navItems.forEach(item => item.addEventListener('click', navigate));

// FOOTER NAV

const footerNav = document.querySelector('.footer_nav');

const footerItems = footerNav.querySelectorAll('a');

footerItems.forEach(item => item.addEventListener('click', navigate));


function navigate(e) {
    if(this.dataset.name){
        e.preventDefault();
        TweenLite.to(window, 1, {
            scrollTo: {
                y: `#${this.dataset.name}`
            },
            ease: Power2.easeOut
        });
    }
}

// PRELOADER 

const preloader = document.querySelector('.preloader');

TweenLite.to('.line', 2.5, {
    scaleX: 1
});

window.onload = function () {
    preloader.classList.add('loaded')
}

// TESTIMONIAL CAROUSEL

$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    asNavFor: ".slider-nav",
    responsive: [
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
});
$(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        }
    ]
    // autoplay: true,
    // autoplaySpeed: 2000,
});

// OUR TEAM CAROUSEL

$(".team-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: ".team-nav",
    autoplay: true,
    autoplaySpeed: 5000,
});
$(".team-nav").slick({
    slidesToShow: 4,
    // slidesToScroll: 1,
    asNavFor: ".team-for",
    // infinite: true,
    // centerMode: true,
    focusOnSelect: true,
    arrows: true
});



// SLIDER JAVASCRIPT

(function() {

    var $$ = function(selector, context) {
      var context = context || document;
      var elements = context.querySelectorAll(selector);
      return [].slice.call(elements);
    };
  
    function _fncSliderInit($slider, options) {
      var prefix = ".fnc-";
  
      var $slider = $slider;
      var $slidesCont = $slider.querySelector(prefix + "slider__slides");
      var $slides = $$(prefix + "slide", $slider);
      var $controls = $$(prefix + "nav__control", $slider);
      var $controlsBgs = $$(prefix + "nav__bg", $slider);
      var $progressAS = $$(prefix + "nav__control-progress", $slider);
  
      var numOfSlides = $slides.length;
      var curSlide = 1;
      var sliding = false;
      var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
      var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;
  
      var autoSlidingActive = false;
      var autoSlidingTO;
      var autoSlidingDelay = 5000; // default autosliding delay value
      var autoSlidingBlocked = false;
  
      var $activeSlide;
      var $activeControlsBg;
      var $prevControl;
  
      function setIDs() {
        $slides.forEach(function($slide, index) {
          $slide.classList.add("fnc-slide-" + (index + 1));
        });
  
        $controls.forEach(function($control, index) {
          $control.setAttribute("data-slide", index + 1);
          $control.classList.add("fnc-nav__control-" + (index + 1));
        });
  
        $controlsBgs.forEach(function($bg, index) {
          $bg.classList.add("fnc-nav__bg-" + (index + 1));
        });
      };
  
      setIDs();
  
      function afterSlidingHandler() {
        $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
        $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");
  
        $activeSlide.classList.remove("m--before-sliding");
        $activeControlsBg.classList.remove("m--nav-bg-before");
        $prevControl.classList.remove("m--prev-control");
        $prevControl.classList.add("m--reset-progress");
        var triggerLayout = $prevControl.offsetTop;
        $prevControl.classList.remove("m--reset-progress");
  
        sliding = false;
        var layoutTrigger = $slider.offsetTop;
  
        if (autoSlidingActive && !autoSlidingBlocked) {
          setAutoslidingTO();
        }
      };
  
      function performSliding(slideID) {
        if (sliding) return;
        sliding = true;
        window.clearTimeout(autoSlidingTO);
        curSlide = slideID;
  
        $prevControl = $slider.querySelector(".m--active-control");
        $prevControl.classList.remove("m--active-control");
        $prevControl.classList.add("m--prev-control");
        $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");
  
        $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
        $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);
  
        $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
        $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");
  
        $activeSlide.classList.add("m--before-sliding");
        $activeControlsBg.classList.add("m--nav-bg-before");
  
        var layoutTrigger = $activeSlide.offsetTop;
  
        $activeSlide.classList.add("m--active-slide");
        $activeControlsBg.classList.add("m--active-nav-bg");
  
        setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
      };
  
  
  
      function controlClickHandler() {
        if (sliding) return;
        if (this.classList.contains("m--active-control")) return;
        if (options.blockASafterClick) {
          autoSlidingBlocked = true;
          $slider.classList.add("m--autosliding-blocked");
        }
  
        var slideID = +this.getAttribute("data-slide");
  
        performSliding(slideID);
      };
  
      $controls.forEach(function($control) {
        $control.addEventListener("click", controlClickHandler);
      });
  
      function setAutoslidingTO() {
        window.clearTimeout(autoSlidingTO);
        var delay = +options.autoSlidingDelay || autoSlidingDelay;
        curSlide++;
        if (curSlide > numOfSlides) curSlide = 1;
  
        autoSlidingTO = setTimeout(function() {
          performSliding(curSlide);
        }, delay);
      };
  
      if (options.autoSliding || +options.autoSlidingDelay > 0) {
        if (options.autoSliding === false) return;
        
        autoSlidingActive = true;
        setAutoslidingTO();
        
        $slider.classList.add("m--with-autosliding");
        var triggerLayout = $slider.offsetTop;
        
        var delay = +options.autoSlidingDelay || autoSlidingDelay;
        delay += slidingDelay + slidingAT;
        
        $progressAS.forEach(function($progress) {
          $progress.style.transition = "transform " + (delay / 1000) + "s";
        });
      }
      
      $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");
  
    };
  
    var fncSlider = function(sliderSelector, options) {
      var $sliders = $$(sliderSelector);
  
      $sliders.forEach(function($slider) {
        _fncSliderInit($slider, options);
      });
    };
  
    window.fncSlider = fncSlider;
  }());
  
  /* not part of the slider scripts */
  
  /* Slider initialization
  options:
  autoSliding - boolean
  autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
  blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
  */
  fncSlider(".example-slider", {autoSlidingDelay: 4000});
  
  var $demoCont = document.querySelector(".demo-cont");
  
  [].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
    $btn.addEventListener("click", function() {
      $demoCont.classList.toggle("credits-active");
    });
  });
  
  document.querySelector(".demo-cont__credits-close").addEventListener("click", function() {
    $demoCont.classList.remove("credits-active");
  });
  
  document.querySelector(".js-activate-global-blending").addEventListener("click", function() {
    document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
  });



  //SERVICES SLIDER

(function() {
    const services = [
        {
          id:1,
          title: "BUSINESS STARTUP",
          body: "Discover all of the opportunities that await entrepreneurs in Qatar. Beacon is committed to helping you get your business started on the right foot, through ensuring that you have the guidance to take the first critical steps towards success, with the tools to adapt throughout your new business ventures",
          img:"src/img/business_startup.jpg"
        },
        {
          id:2,
          title: "EXISTING SERVICES",
          body: "Discover all of the opportunities that await entrepreneurs in Qatar. Beacon is committed to helping you get your business started on the right foot, through ensuring that you have the guidance to take the first critical steps towards success, with the tools to adapt throughout your new business ventures",
          img:"src/img/existing_services.jpg"
        },
        {
          id:3,
          title: "FOR INVESTORS",
          body: "Discover all of the opportunities that await entrepreneurs in Qatar. Beacon is committed to helping you get your business started on the right foot, through ensuring that you have the guidance to take the first critical steps towards success, with the tools to adapt throughout your new business ventures",
          img: "src/img/for_investors.jpg"
        },
      ];

      const servicesContainer = document.getElementById('services');
      
      const servicesNav = servicesContainer.querySelector('.services-nav');
      
      const links = servicesNav.querySelectorAll('a');
      
      const txtSect = servicesContainer.querySelector('.text_section');
      
      const textContainer = servicesContainer.querySelector('.text_wrap');
      
      const imgSect = servicesContainer.querySelector('.img_section');
   
      let img = imgSect.querySelector('img');

      function contentLoad(e){
        e.preventDefault();
       const index = this.parentNode.dataset.index;
       links.forEach(link=>link.classList.remove('current'));
       this.classList.add('current');
       populate(index);
      }
      
      links.forEach(link=>link.addEventListener('click', contentLoad));
        
       function populate(index){
         const body = textContainer.childNodes[3];
        const title = textContainer.childNodes[1];
         let current = services.find(item=>item.id==index);
         TweenMax.to(imgSect, 1, {autoAlpha:0, onComplete:function(){
          img.setAttribute('src',current.img);
         }});

         TweenMax.from(imgSect, 1, {autoAlpha:0, x:30, delay:1.4});
         
         
         TweenMax.to(textContainer,.7,{y:-20, autoAlpha:0});
         
         TweenMax.to(txtSect, 0.3, {
              transformOrigin: '100% 100%',
              scaleX: 0,
              delay:.7,
              ease: Power2.easeIn,
              onComplete:function(){
                title.textContent = current.title;
                body.textContent = current.body;
              }
         });
         TweenMax.to(txtSect, 0.3, {
              transformOrigin: '0% 0%',
              scaleX: 1,
              delay:1.3,
              ease: Power2.easeIn
         });
         
         TweenMax.to(textContainer,.7,   {y:0, autoAlpha:1, delay:1.7});
          
      }      
 
 })();


 (function(){

    const contactBtn = document.querySelector('.contact_btn');
    const body = document.querySelector('body');
    const modalClose = document.querySelector('.modal_close');

    function openModal(e){
        e.preventDefault();

        body.classList.add('activated');
    }

    contactBtn.addEventListener('click',openModal);
    modalClose.addEventListener('click', function(){
        console.log(this);
        if(body.classList.contains('activated')) {
            body.classList.remove('activated');
        }
    })

 }());

    const mobileNav = document.querySelector('.mobile-nav');
    const mobileItems = Array.from(mobileNav.querySelectorAll('li'));
    console.log(mobileItems);
    $(".hamburger").on('click',function(){
        $(this).toggleClass('is-active');
        $('html').toggleClass('mobile-active');
        ($('html').hasClass('mobile-active')) ? 
        TweenMax.staggerFrom(mobileItems, .5, {opacity:0, y:-50,ease:Power1.easeOut}, 0.1) :
        TweenMax.staggerTo('.mobile-item',.5,{autoAlpha:1, y:0,ease:Power1.easeOut});
    });

    //Contact Form
function contactForm(){
	$('#modal_btn').on('click',function(e){
		var $this = $(this);

		e.preventDefault();

		$.ajax({
			url  : 'php/contact.php',
			type : 'POST',
			data : $this.closest('#contact-form').serialize(),
			success : function(data){
				
			}
		});
	});
}

