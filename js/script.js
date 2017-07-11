/* THE NAV******************************************/
const navbar = document.querySelector('.main-nav');
const h4 = document.querySelector('h4');
const ul = document.getElementById('main-nav-ul');
const li = document.querySelectorAll('li');
const menuIcon = document.querySelector('.menu-icon');
const upIcon = document.querySelector('.bottom-up');
//change background-color on scroll
function navbarToggleColor(){
	if(window.pageYOffset>65){
		navbar.className = "main-nav-active";
		ul.style.backgroundColor = 'black';
	}else{
		navbar.className = "main-nav";
		ul.style.backgroundColor = 'transparent';
	}
}
addEventListener('scroll',navbarToggleColor);

//return top arrow
window.addEventListener('scroll',function(){
	let offheight = document.body.offsetHeight;
	if (window.pageYOffset <  offheight*0.80){
		console.log(pageYOffset);
		upIcon.style.display = 'block';
	}else{
		upIcon.style.display = 'none';
	};
	if(window.pageYOffset < 66){
		upIcon.style.display = 'none';
	}
});

//hide-show nav ul on resize
function navbarCheck(){
	if(window.innerWidth<810.1){
		ul.className = 'ul-active';
	}
}
function navbarMenuResize(){
	if(window.innerWidth<810.1){
			ul.className = 'ul-active';
			li[0].className = 'li-active';
			li[1].className = 'li-active';
			li[2].className = 'li-active';
			li[3].className = 'li-active';
			li[4].className = 'li-active';
	}else{
			ul.style.display = 'block';
			ul.className = 'main-nav-ul';
			li[0].className = '';
			li[1].className = '';
			li[2].className = '';
			li[3].className = '';
			li[4].className = '';
	}
}
addEventListener('load',navbarMenuResize);
addEventListener('resize',navbarMenuResize);

//toggle menu on click
menuIcon.addEventListener('click',function(){
	ul.classList.toggle('ul-active-show');
	window.removeEventListener('resize', navbarMenuResize);
		window.addEventListener('resize',function(){
			if(window.innerWidth > 810){
				addEventListener('resize', navbarMenuResize);
			}
		});
});

//smooth scroll by https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')

.not('[href="#"]')
.not('[href="#0"]')

.click(function(event){
	if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1)+']');
		
		if(target.length){
			event.preventDefault();
			$('html, body').animate({
				scrollTop:target.offset().top
			}, 1400, function(){
				var $target = $(target);
				$target.focus();
				if($target.is(":focus")){
					return false;
				}else{
					$target.attr('tabindex','-1');
					$target.focus();
				};
			});
		}
	}
});
//thats few lines allow me in the future to change url without reloading the page
//	let state = {
//		stateOne : true
//	}
//    function updateURL() {
//		history.pushState(state,'alex vidal', '/about');
//		expect(history.state).toEqual(state);
//	 }
  
/***************************************************
END OF NAV******************************************/

/* PROGRESSBARS*************************************/
//progressbar js, inspired by: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_3
function startProgressbaring(){
	let progressArray = [ 
	    progress1 = document.querySelector('.progressbar-1'),
		 progress2 = document.querySelector('.progressbar-2'),
		 progress3 = document.querySelector('.progressbar-3'),
		 progress4 = document.querySelector('.progressbar-4'),
		 progress5 = document.querySelector('.progressbar-5'),
		 progress6 = document.querySelector('.progressbar-6')
	];
	let durationArray = [ 91,65,70,55,95,90];
	let id = setInterval(frame,30);
	let width = 1;
	
	function frame(){
		running = false;
		
		for(var z=0; z<durationArray.length; z++){	
			if(width>=durationArray[z]){
			}else{
				running = true;
				width++;
				progressArray[z].style.width = width + '%';
			}
		}
		if (!running) clearInterval(id);
	}
}
/**************************************************
END OF PROGRESSBARS********************************/






/*COUNTING SPANS***********************************/
function CountingSpan(){
	let span = document.getElementById('counter-container-third-counter');
	span.innerHTML = +span.innerHTML + 1;
}



function stopwatch(){
	setInterval(function(){
		CountingSpan();
	},1000);
}
window.onload = stopwatch;

function experienceCounter(){
	let span = document.querySelector('.counter-container-first-counter'),
		 span_2 = document.querySelector('.counter-container-second-counter'),
		 idInterval_1,
		 ai,
		 idInterval_2;
	
	function experienceCounterIterate(){
		span.innerHTML = +span.innerHTML +1;
		
		function projectsCounterIterate(){
			span_2.innerHTML = +span_2.innerHTML +1;
			if(span_2.innerHTML == 146){
				clearInterval(idInterval_2);
			}
		}
		
		if(span.innerHTML == 10){
			idInterval_2 = setInterval(projectsCounterIterate,40);
			clearInterval(idInterval_1);
			
		}
}
	idInterval_1 = setInterval(experienceCounterIterate,80);
};

/*************************************************
END OF COUNTING SPANS*****************************/


/*PROGRESSBAR AND COUNTERS INDICATORS************/

function progressbaring(){
	if(window.pageYOffset > 790 ){
		startProgressbaring();
		window.removeEventListener('scroll',progressbaring);
	}
}
window.addEventListener('scroll', progressbaring );

function counting(){
if(window.pageYOffset>2853){
	experienceCounter();
	window.removeEventListener('scroll',counting);
	}
}
window.addEventListener('scroll',counting);
/* END OF PROGRESSBAR AND COUNTERS INDICATORS******/
/**************************************************/

/*ADD NEW ITEMS TO GALLERY ***********************/
let loadMoreButton = document.querySelector('.load-more-button'),
	 gallery = document.querySelector('.gallery'),
	 newItem = null;

	 loadMoreButton.addEventListener('click',function(){
	 	newItem = document.createElement('figure');
		 newItem.className = 'snip1550';
	 		newItem.innerHTML = '<h3 class="gallery-h3">Check work</h3><img class="" src="img/images/gallery_image_1.jpg" /><div class="icons"><a><i class="ion-android-pin"></i></a><a><i class="ion-android-chat"></i></a><a><i class="ion-android-share-alt"></i></a>'
		 	gallery.appendChild(newItem);
});
/*************************************************/

