import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  //example step 1
  tour.addStep('step??', {
    title: 'Step ??',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-?? bottom',
    buttons: [{
        text: 'Proceed to Step ??',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

//example last step
  tour.addStep('step??', {
    title: 'Step ??',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-?? bottom',
    buttons: [{
        text: 'Back to Step ??',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Enquiries Page',
        action: function() {
        	window.location.href("../../flat-enquiries/dist/index.htm")
        },
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

document.documentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("shepherd-launcher")) {
        document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
        tour.start();
    }
});