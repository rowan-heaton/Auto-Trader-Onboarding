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
    title: 'Step 1',
    text: 'Here you can check which one of your advertised vehicles was the most popular at getting at getting user attention and also take a look at how your ads are doing by looking at the graph. You can check your recent adverts by clicking the red button.',
    attachTo: '.step-1 bottom',
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
    title: 'Step 2',
    text: 'Here you can check how many vehicles you have advertised, unadvertised stock, check the quality of your ads and your stock over 45 days old.',
    attachTo: '.step-2 top',
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
    title: 'Step 3',
    text: 'Here you can check your oldest stock vehicles on AutoTrader, it displays your vehicle details, daily ad views, days in stock, ad quality and price of vehicle, you can view your whole stocklist by pressing the grey stocklist button. You can advertise stock by pressing the red advertise to stock button.',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  
// //last step
//   tour.addStep('step16', {
//     title: 'Step 16',
//     text: 'Here you can check all of your cars that are available to look at on Portal. You can also check the performance of your adverts and see the rest of Portal.',
//     attachTo: '.step-16 bottom',
//     buttons: [{
//         text: 'Back to Step 15',
//         action: tour.back,
//         classes: 'o-link'
//       },{
//         text: 'Response Page',
//         action: function() {
//             window.location.href="../../flat-response/dist/index.htm";
//         },
//         classes: 'o-link o-link--primary'
//     }]
//     //advanceOn: '.docs-link click'
//   });
     
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