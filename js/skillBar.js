// Scroll up -> Navigaion bar disappears
// Scroll down -> Nav Bar appears
// TODO: Fix header animation

// const body = document.body;
// const nav = document.querySelector("header nav");
// const menu = document.querySelector("header .nav-pane");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;

// 	if(currentScroll == 0) {
// 		body.classList.remove(scrollUp);
// 		return;
// 	}

// 	if(currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
// 		// Down scroll
// 		body.classList.remove(scrollUp);
// 		body.classList.add(scrollDown);
// 	}
// 	else if(currentScroll < lastScroll && body.classList.contains(scrollDown)) {
// 		// Up scroll
// 		body.classList.remove(scrollDown);
// 		body.classList.add(scrollUp);
// 	}

// 	lastScroll = currentScroll;
// });


// Animation skill bar show up when scrolled upon

$(function () {

	var $window = $(window),
		win_height_padded = $window.height() * 1.1;

	$window.on("scroll", revealOnScroll);

	function revealOnScroll() {
		var scrolled = $window.scrollTop(),
			win_height_padded = $window.height() * 1.1;

		// Showed
		$(".revealOnScroll:not(.animated)").each(function () {
			var $this = $(this),
				offsetTop = $this.offset().top;

			if(scrolled + win_height_padded > offsetTop) {
				$this.addClass("animated " + $this.data("animation"));
			}
		});

		// Hidden
		$(".revealOnScroll.animated").each(function (index) {
			var $this = $(this),
				offsetTop = $this.offset().top;

			if(scrolled + win_height_padded < offsetTop) {
				$(this).removeClass("animated " + $this.data("animation"));
			}
		});
	}

	revealOnScroll();
});
