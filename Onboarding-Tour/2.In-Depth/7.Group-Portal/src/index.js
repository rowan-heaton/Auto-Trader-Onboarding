import Shepherd from 'tether-shepherd';
import './styles/main.scss';



let tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-default',
      scrollTo: true
    }
  });
 
  
  //Step 1
    tour.addStep('Step-1', {
    title: 'Step 1',
    text: 'This is the performance dashboard. This shows a list of other dealers, which allows you to compare yourself to others who have similar ads.',
    attachTo: '.Step-1 bottom',
    buttons: [{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'o-link o-link--primary',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'o-link',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'o-link'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'o-link'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'o-link'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'o-link'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });

  //Step 2
    tour.addStep('Step-2', {
    title: 'Step 2',
    text: 'Here is list of all other dealers. With corresponding information such as their rank, daily ad views, stocks etc.',
    attachTo: '.Step-2 top',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'o-link o-link--primary',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'o-link'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'o-link'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'o-link'
    },{
        text: '6',
        action: function() { tour.show(5); },
		classes: 'o-link'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });

  //Step 3
	tour.addStep('Step-3', {
    title: 'Step 3',
    text: 'Here you can choose to show the Overview or Price indicator view.',
    attachTo: '.Step-3 bottom',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'o-link o-link--primary'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'o-link'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'o-link'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'o-link'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });

  //Step 4
    tour.addStep('Step-4', {
    title: 'Step 4',
    text: 'You can sort the list by ascending/descending order here.',
    attachTo: '.Step-4 top',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'o-link o-link--primary'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'o-link'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'o-link'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
    showCancelLink: true
  });
  
  //Step 5
    tour.addStep('Step-5', {
    title: 'Step 5',
    text: 'You can export leads using this button.',
    attachTo: '.Step-5 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'c-at-button-group'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'o-link o-link--primary'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'o-link'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });
  
  //Step 6
    tour.addStep('Step-6', {
    title: 'Step 6',
    text: 'If there\'s something you don\'t understand about the table, click here.',
    attachTo: '.Step-6 left',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'c-at-button-group'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'c-at-button-group'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'o-link o-link--primary'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });
  
  //Step 7
    tour.addStep('Step-7', {
    title: 'Step 7',
    text: 'You can search through different dealers by using this filter, e.g., by Dealership or Franchise.',
    attachTo: '.Step-7 right',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'c-at-button-group'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'c-at-button-group'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'c-at-button-group'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'o-link o-link--primary'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });
  
  //Step 8
    tour.addStep('Step-8', {
    title: 'Step 8',
    text: 'You can press this button to show/hide the filter.',
    attachTo: '.Step-8 right',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
    },{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'c-at-button-group'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'c-at-button-group'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'c-at-button-group'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'c-at-button-group'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'o-link o-link--primary'
    },{
        text: '9',
        action: function() { tour.show(8); },
        classes: 'o-link'
    },{
        text: 'Next',
        action: tour.next,
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true
  });
  
  //Step 9
	tour.addStep('Step-9', {
    title: 'Step 9',
    text: 'You can navigate through different pages of the other dealers here.',
    attachTo: '.Step-9 top',
    buttons: [{
        text: 'Back',
        action: tour.back,
        classes: 'o-link o-link--primary'
	},{
		text: '1',
        action: function() { tour.show(0); },
		classes: 'c-at-button-group',
    },{
        text: '2',
        action: function() { tour.show(1); },
		classes: 'c-at-button-group',
    },{
        text: '3',
        action: function() { tour.show(2); },
		classes: 'c-at-button-group'
    },{
        text: '4',
        action: function() { tour.show(3); },
		classes: 'c-at-button-group'
    },{
        text: '5',
        action: function() { tour.show(4); },
		classes: 'c-at-button-group'
    },{
        text: '6',
        action: function() { tour.show(5); },
        classes: 'c-at-button-group'
    },{
        text: '7',
        action: function() { tour.show(6); },
        classes: 'c-at-button-group'
    },{
        text: '8',
        action: function() { tour.show(7); },
        classes: 'c-at-button-group'
    },{
        text: 'Got it!',
        action: function() { return tour.hide(); },
        classes: 'o-link o-link--primary'
    }],
	showCancelLink: true,
	scrollTo: true
  });
     
  tour.start();

  function jumpTo(step)
  {
	tour.show(step);
  }