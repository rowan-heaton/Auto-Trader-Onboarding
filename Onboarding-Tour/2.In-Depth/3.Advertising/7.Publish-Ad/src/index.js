import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  //example step 1
  tour.addStep('step1', {
    title: 'Review Ad',
    text: 'Here you can see all the details of your advert before you make it live, and add any extra information',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
tour.addStep('step2', {
    title: 'Attention Grabber',
    text: 'Here you can add an attention grabber which will make your ad stand out',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});
tour.addStep('step3', {
    title: 'Description of Ad',
    text: 'Description of your product',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});
tour.addStep('step4', {
    title: 'Retail Price',
    text: 'The retail price of the car',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});
//example last step
  tour.addStep('step5', {
    title: 'Publish Ad',
    text: 'Finally you can publish your advert, or save it and publish it later',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Sourcing',
        action: function() {
           window.location.href="../../../4.Sourcing/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 
function generateContents() {
  var totalSteps = document.querySelectorAll(".down-shep");
  var contentsBuilder = '<div class="contents__wrapper">' + 
    '<button class="contents__toggle c-at-btn c-at-btn--primary">' +
      '<span class="contents__toggle-icon"></span>' +
    '</button>' + 
    '<div class="contents c-at-card c-at-card--shadow c-at-card--padding">' +
      '<h2 class="contents__title">Help sections</h2>' +
      '<ul class="contents__items">';

  for (var i = 0; i < totalSteps.length ; i++) {
    var stepNo = i + 1;
    contentsBuilder += '<li class="contents__item">' + 
      '<button class="contents__section o-button-link" data-step-id="step' + stepNo + '">' + totalSteps[i].getAttribute('data-step-title') + '</button>' + 
    '</li>';
  }

  contentsBuilder += '</ul>' + 
      '</div>' +
    '</div>';

  return contentsBuilder;
}

 function insertContents() {
  document.querySelector(".contents__holder").innerHTML = generateContents();
}

insertContents();

document.documentElement.addEventListener("click", function(event) {
  if (event.target.classList.contains("shepherd-launcher")) {
      document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
      tour.start();
  }

  if (event.target.classList.contains("contents__toggle")) {
    var contentsSection = document.querySelector(".contents__wrapper");

    if (contentsSection.classList.contains("contents__wrapper--open")) {
      contentsSection.classList.remove("contents__wrapper--open");
      document.querySelector(".contents__section--current").classList.remove("contents__section--current");
    } else {
      contentsSection.classList.add("contents__wrapper--open");
      document.querySelector('[data-step-id="' + tour.getCurrentStep().id + '"]').classList.add("contents__section--current");
    }
  }

  if (event.target.classList.contains("contents__section")) {
    var tourId = event.target.getAttribute('data-step-id').replace("step", "");
    tour.show([tourId-1]);

    document.querySelector(".contents__section--current").classList.remove("contents__section--current");
    document.querySelector('[data-step-id="' + tour.getCurrentStep().id + '"]').classList.add("contents__section--current");
  }

  if (event.target.classList.contains("shepherd-button")) {
    document.querySelector(".contents__section--current").classList.remove("contents__section--current");
    document.querySelector('[data-step-id="' + tour.getCurrentStep().id + '"]').classList.add("contents__section--current");
  }

  if (event.target.classList.contains("c-at-navbar__link")) {
    
    var subMenu = event.target.nextElementSibling;
    var allDropdowns = document.querySelectorAll(".is-open");

    for (var i = 0; i < allDropdowns.length; i++) {
      allDropdowns[i].classList.remove("is-open");
      allDropdowns[i].classList.add("is-closed");
    }

    if (subMenu !== null) {
      if (subMenu.classList.contains("is-closed")) {
        subMenu.classList.remove("is-closed");
        subMenu.classList.add("is-open");
      } else {
        subMenu.classList.remove("is-open");
        subMenu.classList.add("is-closed");
      }
    }
  }
  
}, false);

for (var el of document.querySelectorAll(".c-at-nav-dropdown")) {
  el.addEventListener("mouseleave", function() {
    var allDropdowns = document.querySelectorAll(".is-open");

    for (var i = 0; i < allDropdowns.length; i++) {
      allDropdowns[i].classList.remove("is-open");
      allDropdowns[i].classList.add("is-closed");
    }
  })
}