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
    text: 'Here you can check all the latest news and contact information. You can also check your account and edit details. Also check notifications about your adverts. Also check vehicle information by clicking the yellow VRM button.',
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
    text: 'Here you can check which one of your advertised vehicles was the most popular at getting at getting user attention.',
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
    title: 'Step 3',
    text: 'Here you can check a graph which displays how your adverts are doing compared to others of the same type of adverts. You can check your recent adverts by clicking the red button.',
    attachTo: '.step-3 left',
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
    title: 'Step 4',
    text: 'Here you can check how many vehicles you have advertised and can view all of your advertised vehicles.',
    attachTo: '.step-4 top',
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
  tour.addStep('step5', {
    title: 'Step 5',
    text: 'Here you can check how many vehicles you have unadvertised and can view all of your unadvertised vehicles and advertise them.',
    attachTo: '.step-5 top',
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
  tour.addStep('step6', {
    title: 'Step 6',
    text: 'Here you can check how many adverts of yours are of low quality, you can click to make your adverts better and the gain attention of users.',
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
  
  //step 7
  tour.addStep('step7', {
    title: 'Step 7',
    text: 'Here you can check how many vehicles you have had in stock for over 45 days. You can click and have your chosen vehicle advertised on the site.',
    attachTo: '.step-7 top',
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
  
  //step 8
  tour.addStep('step8', {
    title: 'Step 8',
    text: 'Here you can check the oldest vehicles and details that are in your stocklist.',
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
  
  //step 9
  tour.addStep('step9', {
    title: 'Step 9',
    text: 'Here you can check the daily advert views for you oldest stock vehicles.',
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
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  //step 10
  tour.addStep('step10', {
    title: 'Step 10',
    text: 'Here you can check how long your vehicle has been in stock for.',
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
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  //step 11
  tour.addStep('step11', {
    title: 'Step 11',
    text: 'Here you can check the quality of your adverts, if it is not good, it may be a reason why your stock isn’t selling.',
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
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  //step 12
  tour.addStep('step12', {
    title: 'Step 12',
    text: 'Here you can check the price of your vehicle and check if the price is rightly priced.',
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
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  //step 13
  tour.addStep('step13', {
    title: 'Step 13',
    text: 'Here you can advertise your oldest stock by simply clicking the advertise button.',
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
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
  //step 14
  tour.addStep('step14', {
    title: 'Step 14',
    text: 'Here you can view your full stocklist and get detailed information about your vehicles.',
    attachTo: '.step-14 left',
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
  
  //step 15
  tour.addStep('step15', {
    title: 'Step 15',
    text: 'Here you can view security, terms and conditions and privacy policy information.',
    attachTo: '.step-15 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Response Page',
        action: function() {
        window.location.href="../../flat-response/dist/index.htm";
    	},
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