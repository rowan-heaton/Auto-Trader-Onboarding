import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  //step 1
  tour.addStep('step 1', {
    title: 'Time Frame',
    text: 'Response time frame is set here. (Defaults to last 7 days)',
    attachTo: '.step-1 top',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 2
  tour.addStep('step 2', {
    title: 'Overview',
    text: 'How many ad views you\'re getting vs you\'re competitors. RED - lower response rate & GREEN - higher response rate.',
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
  tour.addStep('step 3', {
    title: 'Ad Summary',
    text: 'Summative figures of the response from your adverts.',
    attachTo: '.step-3 right',
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
  tour.addStep('step 4', {
    title: 'Ad Performance',
    text: 'Visual representation of advert views for the response time frame.',
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

  //step 5
  tour.addStep('step 5', {
    title: 'Pricing',
    text: 'Indicates how we think you\'re vehicles are priced. Guidence on what is above, below and at market values.',
    attachTo: '.step-5 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 6
  tour.addStep('step 6', {
    title: 'Leads',
    text: 'These are all the different types of interactions consumers have with you\'re advert.',
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
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 7
  tour.addStep('step 7', {
    title: 'Leads: Auto Trader Calls',
    text: 'Everytime the number on an advert is called, it will update this figure.',
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
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 8
  tour.addStep('step 8', {
    title: 'Leads: Emails',
    text: 'Each email sent to you is recorded and dispayed here.',
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
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 9
  tour.addStep('step 9', {
    title: 'Leads: Answerable Chats',
    text: 'Live chat conversation numbers',
    attachTo: '.step-9 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 10
  tour.addStep('step 10', {
    title: 'Leads: Click To Call',
    text: 'On mobile devices, when a consumer clicks the number on an advert and brings up their dialer to enquire about the car.',
    attachTo: '.step-10 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 11
  tour.addStep('step 11', {
    title: 'Leads: Website Clicks',
    text: 'Everytime you\'re website is directly visited from the link on the advert.',
    attachTo: '.step-11 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 12
  tour.addStep('step 12', {
    title: 'Leads: Saves To Garage',
    text: 'Consumers can save you\'re advert to their gararge, for later use if they are interested',
    attachTo: '.step-12 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 13
  tour.addStep('step 13', {
    title: 'Leads: Map Views',
    text: 'On mobile devices, consumers can bring up the location of your dealership location, to find out where it is.',
    attachTo: '.step-13 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

//step 14
  tour.addStep('step 14', {
    title: 'Leads: Print Outs',
    text: 'Consumers can print off each advert and each time they do its recorded here.',
    attachTo: '.step-14 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising/VRM',
        action: function() {
        	window.location.href="../../3.Advertising/1.VRM-Search/dist/index.htm";
      },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

// document.documentElement.addEventListener("click", function(event) {
//     if (event.target.classList.contains("shepherd-launcher")) {
//         document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
//         tour.start();
//     }
// }

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
  
}, false);