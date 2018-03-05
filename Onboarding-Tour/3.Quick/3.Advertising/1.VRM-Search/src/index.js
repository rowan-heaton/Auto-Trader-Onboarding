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
    title: 'Overview',
    text: 'On this page you can enter the registration and mileage of the vehicle you want to search for',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'VRM Results',
        action: function() {
            window.location.href="../../2.VRM-Results/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 