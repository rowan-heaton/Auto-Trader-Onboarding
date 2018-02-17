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
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-1 bottom',
    buttons: [{
        text: '>> Step 2 >>',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 2
  tour.addStep('step 2', {
    title: 'Step 2',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-2 bottom',
    buttons: [{
        text: '<< Step 1 <<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: '>> Step 3 >>',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 3
  tour.addStep('step 3', {
    title: 'Step 3',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-3 bottom',
    buttons: [{
        text: '<< Step 2 <<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: '>> Step 4 >>',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 4
  tour.addStep('step 4', {
    title: 'Step 4',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-4 bottom',
    buttons: [{
        text: '<< Step 3 <<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: '>> Step 5 >>',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
    //advanceOn: '.docs-link click'
  });

  //step 5
  tour.addStep('step 5', {
    title: 'Step 5',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-5 bottom',
    buttons: [{
        text: '<< Step 4 <<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: '>> Step 6 >>',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true,
    //advanceOn: '.docs-link click'
  });

//step 6
  tour.addStep('step 6', {
    title: 'Step 6',
    text: 'This is some example text. blah blah blah',
    attachTo: '.step-6 bottom',
    buttons: [{
        text: '<< Step 5 <<',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Got it!',
        action: function() {
        return tour.hide();
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
