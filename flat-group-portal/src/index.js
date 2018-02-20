import Shepherd from 'tether-shepherd';
import './styles/main.scss';

let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: false
    }
  });
  
  //example step 1
    tour.addStep('Step-1', {
    title: 'Step 1',
    text: 'This is the performance dashboard. This shows a list of other dealers, which allows you to compare yourself to others who have similar ads.',
    attachTo: '.Step-1 bottom',
    buttons: [{
        text: 'Proceed to Step 2',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });

    tour.addStep('Step-2', {
    title: 'Step 2',
    text: 'Here is list of all other dealers. With corresponding information such as their rank, daily ad views, stocks etc.',
    attachTo: '.Step-2 top',
    buttons: [{
        text: 'Back to Step 1',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 3',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });

    tour.addStep('Step-3', {
    title: 'Step 3',
    text: 'You can sort the list by ascending/descending order here.',
    attachTo: '.Step-3 top',
    buttons: [{
        text: 'Back to Step 2',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 4',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
	tour.addStep('Step-4', {
    title: 'Step 4',
    text: 'Here you can choose to show the Overview or Price indicator view.',
    attachTo: '.Step-4 bottom',
    buttons: [{
        text: 'Back to Step 3',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 5',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('Step-5', {
    title: 'Step 5',
    text: 'You can export leads using this button.',
    attachTo: '.Step-5 left',
    buttons: [{
        text: 'Back to Step 4',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 6',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('Step-6', {
    title: 'Step 6',
    text: 'If there\'s something you don\'t understand about the table, click here.',
    attachTo: '.Step-6 left',
    buttons: [{
        text: 'Back to Step 5',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 7',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('Step-7', {
    title: 'Step 7',
    text: 'You can search through different dealers by using this filter, e.g., by Dealership or Franchise.',
    attachTo: '.Step-7 right',
    buttons: [{
        text: 'Back to Step 6',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 8',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
    tour.addStep('Step-8', {
    title: 'Step 8',
    text: 'You can press this button to show/hide the filter.',
    attachTo: '.Step-8 right',
    buttons: [{
        text: 'Back to Step 7',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Proceed to Step 9',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
    //advanceOn: '.docs-link click'
  });
  
	tour.addStep('Step-9', {
    title: 'Step 9',
    text: 'You can navigate through different pages of the other dealers here.',
    attachTo: '.Step-9 top',
    buttons: [{
        text: 'Back to Step 8',
        action: tour.back,
        classes: 'o-link'
      },{
        text: 'Got it!',
        action: function() {
            //document.querySelector(".shepherd-launcher").classList.remove("u-at-hidden");
            return tour.hide();
        },
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true,
	scrollTo: true
    //advanceOn: '.docs-link click'
  });
     
  tour.start();

document.documentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("shepherd-launcher")) {
        document.querySelector(".shepherd-launcher").classList.add("u-at-hidden");
        tour.start();
    }
});