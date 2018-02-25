import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
     
  tour.addStep('step1', {
    title: 'Step 1',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step2', {
    title: 'Step 2',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step3', {
    title: 'Step 3',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step4', {
    title: 'Step 4',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back to Step 3',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step5', {
    title: 'Step 5',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: 'Back to Step 4',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 6',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step6', {
    title: 'Step 6',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-6 bottom',
    buttons: [{
        text: 'Back to Step 5',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 7',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step7', {
    title: 'Step 7',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-7 bottom',
    buttons: [{
        text: 'Back to Step 6',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 8',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step8', {
    title: 'Step 8',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-8 bottom',
    buttons: [{
        text: 'Back to Step 7',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Got it!',
        action: function() {
            document.querySelector(".shepherd-launcher").classList.remove("u-at-hidden");
            return tour.hide();
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