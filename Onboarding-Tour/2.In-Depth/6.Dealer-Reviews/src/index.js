import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });

//step 1
tour.addStep('step1', {
  title: 'Sort Results',
  text: 'This allows you to sort the results of your reviews to display it in a specific order.',
  attachTo: '.step-1 right',
  buttons: [{
      text: 'Next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
  //advanceOn: '.docs-link click'
});

//step 2
tour.addStep('step2', {
  title: 'Customer Review',
  text: 'Each box on the page represents a different customer review.',
  attachTo: '.step-2 bottom',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'Next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
  //advanceOn: '.docs-link click'
});

//step 3
tour.addStep('step3', {
  title: 'Review Header',
  text: 'The header of each review will include: Vehicle Registration, Star Rating, Customer Name & Email Address and Review Stage Date',
  attachTo: '.step-3 bottom',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'Next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
  //advanceOn: '.docs-link click'
});



//step 4
tour.addStep('step4', {
  title: 'Review Body',
  text: 'The body of each review will include: the customer review text or an indicaton of when you sent the request to review invite and what the current status of the review.',
  attachTo: '.step-4 bottom',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'Next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
  //advanceOn: '.docs-link click'
});

//step 6
tour.addStep('step5', {
  title: 'Helpful Info',
  text: 'The helpful info section contains Auto Traders best practice guide, a guide to how each review is moderated and the purpose of Dealer Reviews.',
  attachTo: '.step-5 right',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'Responce Dashboard',
      action: function() {
          window.location.href="../../7.Group-Portal/dist/index.htm";
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