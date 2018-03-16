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
    title: 'Ad Overview',
    text: 'Here you can see all the details of your advert before you make it live, and you can add any extra information.',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Sourcing',
        action: function() {
           window.location.href="../../../4.Sourcing/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 
