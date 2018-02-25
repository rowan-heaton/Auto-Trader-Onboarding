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
    text: 'Here you can sort the results of your dealer reviews to display it in the specified order.',
    attachTo: '.step-1 right',
    buttons: [{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

//step 2
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'Each box displays a different review completed by a customer. A start rating is provided and also the date at which it was created is shown.',
    attachTo: '.step-2 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Responce Dashboard',
        action: function() {
            window.location.href="../../flat-group-portal/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();