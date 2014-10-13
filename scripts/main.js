document.addEventListener('DOMContentLoaded',function() { /*Callback telling that all inside should be loaded after the html content has loaded*/	
	var loginModal = document.querySelector('.login-modal');
	var lightbox = document.querySelector('.lightbox');
	var cancel = document.querySelector('.cancel');
	var signin = document.querySelector('#signin');
	
	var loginModalToggleAreas = document.querySelectorAll(
		'.lightbox, .cancel, #signin'
	);
	
	for (var i=0; i < loginModalToggleAreas.length; i++){
		loginModalToggleAreas[i].addEventListener('click',function(){
			toggle(loginModal);
			});
			}
		});
	
	function toggle(element) {
		if (element.classList) {
			element.classList.toggle('hidden');
	} else {
		var classes = element.className.split(' ');
		var classIndex;
		  for (var i=0; i<classes.length; i++) {
		  if (classes[i] === 'hidden')
			classIndex = i;
		}

		if (classIndex)
		  classes.splice(classIndex, 1);
		else
		  classes.push('hidden');

	  el.className = classes.join(' ');
	  }
}
//
	
	
	/* why is [i] used? because its a variable as opposed to an array which will use the dot syntax

	the long way of doing it
	lightbox.addEventListener('click', function(){
		toggle(loginModal);
		});
	
	cancel.addEventListener('click', function() {
		toggle(loginModal);
		});
		
	signin.addEventListener('click', function() {
		toggle(loginModal);
		});
});
*/ 
	function toggle(element) {
		if (element.classList)
			element.classList.toggle('hidden')
			}
	
	function hide(element) {
		if (element.classList)
			element.classList.add('hidden');
		else
			element.className+=''+'hidden';
		}
		//element.classList creates an empty array that will add the class hidden to classList. 
		//for older browsers that don't have a classList function, it will use className that will add hidden 
		//into a string after putting in a space
		
		
	function show(element) {
		if (element.classList)
			element.classList.remove('hidden');
		else	
			element.className = element.className
				.replace(new RegExp('(^|\\b)' + className.split(' ')
				.join('|') + '(\\b|$)', 'gi'), ' ');
		}
		//element.className returns a string, and then .replace the first argument where we are finding the
		// the string hidden and then return it with another string with just a space.
		//regular expression takes a pattern and a flag that tells you its case insensitive
		//first it turns a string into an array with each word is split that has spaces in between
		//then it replaces "hidden" with a space in older browsers

