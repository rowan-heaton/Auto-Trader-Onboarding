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
    text: 'Enter regestration of the vehicle',
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
    text: 'Enter the milage of the vehicle',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Proceed to Step 3',
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
  tour.addStep('step3', {
    title: 'Step 3',
    text: 'Next press button to find vehicle',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising #2',
        action: function() {
            window.location.href("../../flat-advertising-2/dist/index.htm");
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 