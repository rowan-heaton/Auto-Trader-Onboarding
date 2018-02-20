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
    title: 'Step 1',
    text: 'The car you searched for should show up here',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });
tour.addStep('step2', {
    title: 'Step 2',
    text: 'Next you can do a full vehicle check',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});
tour.addStep('step3', {
    title: 'Step 3',
    text: 'Next you can add this vehicle to teh forecourt',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});

//example last step
  tour.addStep('step4', {
    title: 'Step 4',
    text: 'ALso if this isnt the vehicle you were searching for you can search again or enter it manually',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back to Step 3',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising 3',
        action: function() {
            window.location.href("../../flat-advertising-3/dist/index.htm")
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 