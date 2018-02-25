import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  //step 1
  tour.addStep('step 1', {
    title: 'Step 1',
    text: 'Response time frame is set here. Defaults to last 7 days.',
    attachTo: '.step-1 top',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 2
  tour.addStep('step 2', {
    title: 'Step 2',
    text: 'How many ad views youre getting vs youre competitors. RED - lower response rate & GREEN - higher responce rate.',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 3
  tour.addStep('step 3', {
    title: 'Step 3',
    text: 'Summative figures of the response from your adverts.',
    attachTo: '.step-3 right',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

//step 4
  tour.addStep('step 4', {
    title: 'Step 4',
    text: 'These are all the different types of interactions consumers have with youre advert.',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising/VRM',
        action: function() {
        	window.location.href="../../flat-advertising-1/dist/index.htm";
      },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();