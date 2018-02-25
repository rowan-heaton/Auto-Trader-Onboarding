import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });

  tour.addStep('step 1', {
    title: 'Step 1',
    text: 'This is the Sourcing page. It can be used to filter listed cars on the AutoTrader website to a particular make or model and much more',
    attachTo: '.step-1 top',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  tour.addStep('step 2', {
    title: 'Step 2',
    text: 'Here is the Stack source, where you can change the type of listing you want to see',
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

  tour.addStep('step 3', {
    title: 'Step 3',
    text: 'Here you can change the vehicle type',
    attachTo: '.step-3 bottom',
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

  tour.addStep('step 4', {
    title: 'Step 4',
    text: 'And also change the make and model of the vehicle type you selected',
    attachTo: '.step-4 bottom',
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

  tour.addStep('step 5', {
    title: 'Step 5',
    text: 'You can even search for a particular dealer and see their selection of vehicles',
    attachTo: '.step-5 right',
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

  tour.addStep('step 6', {
    title: 'Step 6',
    text: 'You can filter by how recently a vehicle has been listed',
    attachTo: '.step-6 top',
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

  tour.addStep('step 7', {
    title: 'Step 7',
    text: 'The various filters here can be selected to refine your search to your preference',
    attachTo: '.step-7 bottom',
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

  tour.addStep('step 8', {
    title: 'Step 8',
    text: 'You can highlight a vehicle if you want to save it to view it later',
    attachTo: '.step-8 bottom',
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

  tour.addStep('step 9', {
    title: 'Step 9',
    text: 'Or view further details of a particular vehicle that interests you',
    attachTo: '.step-9 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Enquiries',
        action: function() {
        window.location.href="../../flat-enquiries/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
        showCancelLink: true
    });
    //advanceOn: '.docs-link click'
  tour.start();
