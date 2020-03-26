const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}


window.onscroll = function showTopSide() {
	let anchor = document.querySelector('.anchor');
	let section_height = document.querySelector('.faq');

    if(window.pageYOffset > section_height.offsetHeight) {
    	anchor.classList.add('anchor_visible');
    } else {
    	anchor.classList.remove('anchor_visible');
    }
}