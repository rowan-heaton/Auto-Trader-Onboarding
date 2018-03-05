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
    title: 'Vehicle Options',
    text: 'These options allow you to create an advert for the vehicle or add another vehicles and view your stock&ads.',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Upload Photos',
        action: function() {          
            window.location.href="../../4.Upload-Photos/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 