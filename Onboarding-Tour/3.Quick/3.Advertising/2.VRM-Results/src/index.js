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
    title: 'Result Actions',
    text: 'The car you have searched for should show up here and here you can choose wether to do a complete full vehicle check or add it to the forecourt.',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Added to Forecourt',
        action: function() {
            window.location.href="../../3.Added-To-Forecourt/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();


 