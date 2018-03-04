import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });

  tour.addStep('step 1', {
    title: 'Filter Menu',
    text: 'This can be used to filter listed cars on the AutoTrader website to a particular make or model and much more',
    attachTo: '.step-1 top',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step 2', {
    title: 'Stock Source',
    text: 'Here is the Stock source, where you can change the type of listing you want to see',
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

  tour.addStep('step 3', {
    title: 'Vehicle Type',
    text: 'Here you can change the vehicle type',
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

  tour.addStep('step 4', {
    title: 'Make and Model',
    text: 'And also change the make and model of the vehicle type you selected',
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

  tour.addStep('step 5', {
    title: 'Dealer Search',
    text: 'You can even search for a particular dealer and see their selection of vehicles',
    attachTo: '.step-5 right',
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

  tour.addStep('step 6', {
    title: 'Order Results',
    text: 'You can filter by how recently a vehicle has been listed',
    attachTo: '.step-6 top',
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

  tour.addStep('step 7', {
    title: 'Refine Search',
    text: 'The various filters here can be selected to refine your search to your preference',
    attachTo: '.step-7 bottom',
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

  tour.addStep('step 8', {
    title: 'Hightlight a Vehicle',
    text: 'You can highlight a vehicle if you want to save it to view it later',
    attachTo: '.step-8 bottom',
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

  tour.addStep('step 9', {
    title: 'Full Details',
    text: 'Or view further details of a particular vehicle that interests you',
    attachTo: '.step-9 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Enquiries',
        action: function() {
        window.location.href="../../5.Enquiries/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
        showCancelLink: true
    });
    //advanceOn: '.docs-link click'
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
