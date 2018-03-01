import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
//Step 1
tour.addStep('Step-1', {
  title: 'Step 1',
  text: 'You can export the queried results into a ??? file using this button.',
  attachTo: '.Step-1 left',
  buttons: [{
      text: 'next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
});

//Step 2
tour.addStep('Step-2', {
  title: 'Step 2',
  text: 'This box allows you to refine the output in the adjacent table, by use of filters. You can search for specifc dealers or show groups of related dealers.',
  attachTo: '.Step-2 right',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'next',
      action: tour.next,
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
});

//Step 3
tour.addStep('Step-3', {
  title: 'Step 3',
  text: 'This table holds all the information to compare similar dealers and a rank is given to them. All collums are filterable by the small arrows next to each heading.',
  attachTo: '.Step-3 left',
  buttons: [{
      text: 'Back',
      action: tour.back,
      classes: 'o-link'
    },{
      text: 'Got it!',
      action: function() {
          return tour.hide();
      },
      classes: 'o-link o-link--primary'
  }],
  showCancelLink: true
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

  contentsBuilder += '</ul>' + '</div>' +'</div>';

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
