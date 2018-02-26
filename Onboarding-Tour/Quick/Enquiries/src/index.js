import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
  
  //step 1
  tour.addStep('step1', {
    title: 'Step 1',
    text: 'Here you can display all your enquiries dating from the last 7 days to a range of dates of your choice, as well as displaying what type of enquiries you would like it to display',
    attachTo: '.step-1 top',
    buttons: [{
        text: 'next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
//last step
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'On the left you can see your enquiries which includes date, time and senders name. Towards the right, it displays the type of enquiry for a specific vehicle, highlighting the price and mileage. It will also display the contact information of the person that sent the enquiry',
    attachTo: '.step-2 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Group Portal',
        action: function() {
            window.location.href="../../flat-group-portal/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();
