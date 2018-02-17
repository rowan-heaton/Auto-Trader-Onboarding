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
    text: 'Here you can read information regarding the security of your account and how to prevent fraudulent use of your account.',
    attachTo: '.step1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });

  //step 2
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'To begin logging into your account, you must insert the email address you registered your account with.',
    attachTo: '.step2 top',
    buttons: [{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
  //step 3
  tour.addStep('step3', {
    title: 'Step 3',
    text: 'After entering your email address, you must insert your registered password, that’s used to log into the account with.',
    attachTo: '.step3 top',
    buttons: [{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
  //step 4
  tour.addStep('step4', {
    title: 'Step 4',
    text: 'Once your email and password is entered, you can click the log in button to gain access to your account.',
    attachTo: '.step4 right',
    buttons: [{
        text: 'Proceed to Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
  //step 5
  tour.addStep('step5', {
    title: 'Step 5',
    text: 'If you have forgotten your email address or password, simply click this text and you will be redirected to gain back access to your account.',
    attachTo: '.step5 bottom',
    buttons: [{
        text: 'Proceed to Step 6',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
  //step 6
  tour.addStep('step6', {
    title: 'Step 6',
    text: 'If you are new to AutoTrader, you can create an account and place your adverts by clicking this button.',
    attachTo: '.step6 bottom',
    buttons: [{
        text: 'Proceed to Step 7',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
  //step 7
  tour.addStep('step7', {
    title: 'Step 7',
    text: 'For more advice on products and help from experts, click this link.',
    attachTo: '.step7 right',
    buttons: [{
        text: 'Proceed to Step 8',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
  
//last step
  tour.addStep('step8', {
    title: 'Step 8',
    text: 'For information about privacy, click this link to be directed to AutoTrader’s Privacy Policy.',
    attachTo: '.step8 left',
    buttons: [{
        text: 'Back to Step 7',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Got it!',
        action: function() {
            document.querySelector(".shepherd-launcher").classList.remove("u-at-hidden");
            return tour.hide();
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