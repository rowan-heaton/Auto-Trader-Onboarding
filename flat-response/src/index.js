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
        text: 'Step 2',
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
        text: 'Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 3',
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
        text: 'Step 2',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 4
  tour.addStep('step 4', {
    title: 'Step 4',
    text: 'Visual representation of advert views in the response time frame.',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: 'Step 3',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 5
  tour.addStep('step 5', {
    title: 'Step 5',
    text: 'Indicates how we think youre vehicles are priced. Guidence on what is above, below and at market values.',
    attachTo: '.step-5 left',
    buttons: [{
        text: 'Step 4',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 6',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 6
  tour.addStep('step 6', {
    title: 'Step 6',
    text: 'These are all the different types of interactions consumers have with youre advert.',
    attachTo: '.step-6 top',
    buttons: [{
        text: 'Step 5',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 7',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 7
  tour.addStep('step 7', {
    title: 'Step 7: Auto Trader Calls',
    text: 'Everytime the number on an advert is called, it will update this figure.',
    attachTo: '.step-7 bottom',
    buttons: [{
        text: 'Step 6<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 8',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 8
  tour.addStep('step 8', {
    title: 'Step 8: Emails',
    text: 'Each emial sent to youre self is recorded and dispayed here.',
    attachTo: '.step-8 bottom',
    buttons: [{
        text: 'Step 7',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 9',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 9
  tour.addStep('step 9', {
    title: 'Step 9: Answerable Chats',
    text: '????????',
    attachTo: '.step-9 bottom',
    buttons: [{
        text: 'Step 8',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 10',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 10
  tour.addStep('step 10', {
    title: 'Step 10: Click To Call',
    text: 'On mobile devices, when a consumer clicks the number on an advert and brings up thier dialer to enquire about the car.',
    attachTo: '.step-10 bottom',
    buttons: [{
        text: 'Step 9',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 11',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 11
  tour.addStep('step 11', {
    title: 'Step 11: Website Clicks',
    text: 'Everytime youre website is directly visited from the link on the advert.',
    attachTo: '.step-11 bottom',
    buttons: [{
        text: 'Step 10',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 12',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 12
  tour.addStep('step 12', {
    title: 'Step 12: Saves To Gararge',
    text: 'Consumers can save youre advert to their gararge, for later use if they are intereted',
    attachTo: '.step-12 bottom',
    buttons: [{
        text: 'Step 11',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 13',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

  //step 13
  tour.addStep('step 13', {
    title: 'Step 13: Map Views',
    text: 'On mobile devices, consumers can bring up the location of your dealership location to find out where it is.',
    attachTo: '.step-13 bottom',
    buttons: [{
        text: 'Step 12<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Step 14',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

//step 14
  tour.addStep('step 14', {
    title: 'Step 14: Print Outs',
    text: 'Consumers can print off each advert and each time they do its recorded here.',
    attachTo: '.step-14 bottom',
    buttons: [{
        text: 'Step 13',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Advertising/VRM',
        action: function() {
        	window.location.href("../../flat-advertising/dist/??")
      },
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

// document.documentElement.addEventListener("click", function(event) {
//     if (event.target.classList.contains("shepherd-launcher")) {
//         document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
//         tour.start();
//     }
// }
