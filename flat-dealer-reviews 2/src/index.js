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
    text: 'Here you check which dealer you are requesting to review, check the star rating and email address which is on display and furthermore check the date you have requested the review.',
    attachTo: '.step-1 top',
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
    text: 'Here you can resend an invite to the same dealer you have sent an invite to. You can also check the status of your invite.',
    attachTo: '.step-2 top',
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
  tour.addStep('step3', {
    title: 'Step 3',
    text: 'Here you can see a star rating given, the email address it was given from and also the review date displayed.',
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
  
  //step 4
  tour.addStep('step4', {
    title: 'Step 4',
    text: 'Here you can see the message/review given by the dealer, and also the status of your dealer request.',
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
  
//last step
  tour.addStep('step5', {
    title: 'Step 5',
    text: 'Here you can sort the results of your dealer reviews to display it in the specified order.',
    attachTo: '.step-5 right',
    buttons: [{
        text: 'Back to Step 4',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Responce Dashboard',
        action: function() {
            window.location.href("../../flat-group-portal/dist/index.htm")
        },
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

document.documentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("shepherd-launcher")) {
        document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
        tour.start();
    }
});