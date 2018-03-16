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
    title: 'Adding Vehicle Spec',
    text: 'You can add specs and upgrades on the car.',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Set Retail Price',
        action: function() {
            window.location.href="../../6.Set-Retail-Price/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 
