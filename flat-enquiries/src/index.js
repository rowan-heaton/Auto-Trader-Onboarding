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
    text: 'This is where your previously set memorable word comes into use',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

//example last step
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'Enter the 1st character of the word, or whichever character it asks you to enter, then login.',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Dealer Reviews',
        action: function() {
            window.location.href("../../flat-dealer-reviews/dist/index.htm")
        },
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
     
  tour.start();
