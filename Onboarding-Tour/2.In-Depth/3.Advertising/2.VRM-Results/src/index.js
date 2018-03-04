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
    title: 'Search Results',
    text: 'The car you searched for should show up here',
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
    title: 'Full Vehicle Check',
    text: 'You can do a full vehicle check',
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
    title: 'Add To Forecourt',
    text: 'You can add this vehicle to the forecourt',
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

//example last step
  tour.addStep('step4', {
    title: 'Search Again',
    text: 'ALso if this isnt the vehicle you were searching for you can search again or enter it manually',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Added To Forecourt',
        action: function() {
            window.location.href="../../3.Advertising/3.Added-To-Forecourt/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();


 