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
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

tour.addStep('step2', {
    title: 'Step 2',
    text: 'If youre done on this page you can continue to spec',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});

tour.addStep('step3', {
    title: 'Step 3',
    text: 'Here you can choose images to upload, or you can drag and drop them.',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});

tour.addStep('step4', {
    title: 'Step 4',
    text: 'You can add a YouTube video of your car as well',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});

tour.addStep('step5', {
    title: 'Step 5',
    text: 'The pictures of your vehicle will show up here',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
         text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
});
//example last step
  tour.addStep('step6', {
    title: 'Step 6',
    text: 'Once your finished you can continue to spec',
    attachTo: '.step-6 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising #5',
        action: function() {
            window.location.href="../../flat-advertising-5/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

 