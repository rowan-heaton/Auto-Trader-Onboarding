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
    title: 'Enter Registration',
    text: 'Enter registration of the vehicle',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
tour.addStep('step2', {
    title: 'Enter Milage',
    text: 'Enter the milage of the vehicle',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});
//example last step
  tour.addStep('step3', {
    title: 'Find Vehicle',
    text: 'Next press button to find vehicle',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'VRM Results',
        action: function() {
            window.location.href="../../3.advertising/2.VRM-Results/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 