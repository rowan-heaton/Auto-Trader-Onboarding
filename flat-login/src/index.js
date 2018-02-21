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
    text: 'To begin logging into your account, you must insert the email address you registered your account with.',
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
  tour.addStep('step2', {
    title: 'Step 2',
    text: 'After entering your email address, you must insert your registered password, that’s used to log into the account with.',
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
    text: 'Once your email and password is entered, you can click the log in button to gain access to your account.',
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
  tour.addStep('step4', {
    title: 'Step 4',
    text: 'If you have forgotten your email address or password, simply click this text and you will be redirected to gain back access to your account.',
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
  
  //step 5
  tour.addStep('step5', {
    title: 'Step 5',
    text: 'If you are new to AutoTrader, you can create an account and place your adverts by clicking this button.',
    attachTo: '.step-5 bottom',
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
  
  //step 6
  tour.addStep('step6', {
    title: 'Step 6',
    text: 'For more advice on products and help from experts, click this link.',
    attachTo: '.step-6 right',
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

  //step 7
  tour.addStep('step7', {
    title: 'Step 7',
    text: 'Here you can read information regarding the security of your account and how to prevent fraudulent use of your account.',
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
  
//last step - step 8
  tour.addStep('step8', {
    title: 'Step 8',
    text: 'For information about privacy, click this link to be directed to AutoTrader’s Privacy Policy.',
    attachTo: '.step-8 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link'
      },{
        text: '2FA Page',
        action: function() {
            window.location.href="../../flat-two-factor/dist/index.htm";
        },
        classes: 'o-link o-link--primary'
    }]
    //advanceOn: '.docs-link click'
  });
     
tour.start();