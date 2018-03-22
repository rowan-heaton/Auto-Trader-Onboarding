import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  

//example last step
  tour.addStep('step1', {
    title: 'Set Vehicle Price',
    text: 'On this page you can set the retail price ',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Publish Ad',
        action: function() {
            window.location.href="../../7.Publish-Ad/dist/index.htm";
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
  
}, false);
 