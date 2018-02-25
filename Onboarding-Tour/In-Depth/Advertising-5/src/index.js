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
    text: 'You can add spec and upgrades on the car',
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
    title: 'Step 2',
    text: 'You can skip to price',
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
tour.addStep('step3', {
    title: 'Step 3',
    text: 'You can manually search for specs.',
    attachTo: '.step-3 bottom',
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
tour.addStep('step4', {
    title: 'Step 4',
    text: 'Next you can add it',
    attachTo: '.step-4 bottom',
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
  tour.addStep('step5', {
    title: 'Step 5',
    text: 'Enter the milage of the vehicle',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising #6',
        action: function() {
            window.location.href="../../flat-advertising-6/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 