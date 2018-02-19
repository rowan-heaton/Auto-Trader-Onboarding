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
    text: 'This is the Enquiries Tab this gathers all enquiries from customers •A copy of emails will be sent here  •A copy of calls will come here to listen to  •Part exchange leads will be sent here',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('step2', {
    title: 'Step 2',
    text: 'This shows which vehicle the enquiry is about as well as a brief description',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('step3', {
    title: 'Step 3',
    text: 'Each enquiry will get its own tab shown here, clicking on each one will go into what the enquiry actually is',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

//example last step
  tour.addStep('step4', {
    title: 'Step 4',
    text: 'To reply to a cusotmer enquiry use thi sbutton to launch your default email client. Only the original enquiry will be logged in the enquiries tab. Or see their contact details below',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back to Step ??',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Portal Landing Page',
        action: function() {
            window.location.href("../../flat-landing/index.htm")
        },
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
     
  tour.start();
