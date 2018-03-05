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
    title: 'Add Vehicle Photos',
    text: 'You can upload muliple photos for your vehicle and/or a youtube video for the advert.',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Add Spec',
        action: function() {
            window.location.href="../../5.Add-Spec/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 