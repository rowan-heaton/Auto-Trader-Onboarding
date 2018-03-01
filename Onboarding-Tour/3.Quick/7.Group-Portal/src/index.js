import Shepherd from 'tether-shepherd';
import './styles/main.scss';
  
let tour = new Shepherd.tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: false
    }
  });
  
//Step 1
tour.addStep('Step1', {
title: 'Step 1',
text: 'This is the performance dashboard. Which allows you to compare yourself to others who have similar ads.',
attachTo: '.Step-1 bottom',
buttons: [{
    text: 'next',
    action: tour.next,
    classes: 'o-link o-link--primary'
}],
showCancelLink: true
});

//Step 2
tour.addStep('Step2', {
title: 'Step 2',
text: 'Here shows the list of all other dealers. With corresponding information such as their rank, daily ad views, stocks etc.',
attachTo: '.Step-2 top',
buttons: [{
    text: 'Back',
    action: tour.back,
    classes: 'o-link'
  },{
    text: 'Got it!',
    action: function() {
        return tour.hide();
    },
    classes: 'o-link o-link--primary'
}],
showCancelLink: true
});

tour.start();