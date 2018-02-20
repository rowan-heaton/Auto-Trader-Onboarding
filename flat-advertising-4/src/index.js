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
    text: 'If you chose to advertise, you will be taken to this pages to upload photos for your vehicle',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });

tour.addStep('step2', {
    title: 'Step 2',
    text: 'If youre done on this page you can continue to spec',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});

tour.addStep('step3', {
    title: 'Step 3',
    text: 'Here you can choose images to upload, or you can drag and drop them.',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});

tour.addStep('step4', {
    title: 'Step 4',
    text: 'You can add a YouTube video of your car as well',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Proceed to Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 3',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});

tour.addStep('step4', {
    title: 'Step 4',
    text: 'You can add a YouTube video of your car as well',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Proceed to Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 3',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }]
});

tour.addStep('step5', {
    title: 'Step 5',
    text: 'The pictures of your vehicle will show up here',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: 'Proceed to Step 6',
        action: tour.next,
        classes: 'o-link o-link--primary'
    },{
         text: 'Back to Step 4',
        action: tour.back,
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
});
//example last step
  tour.addStep('step6', {
    title: 'Step 6',
    text: 'Once your finished you can continue to spec',
    attachTo: '.step-6 bottom',
    buttons: [{
        text: 'Back to Step 5',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Got it!',
        action: function() {
            window.location.href("../../flat-advertising-5/dist/index.js")
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelIcon: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 