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
    text: 'Here you can enter a retail price',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });

//example last step
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'Next you can review advert',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising 7',
        action: function() {
            window.location.href("../../flat-advertising-7/dist/index.htm")
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 