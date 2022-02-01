const toggleMenu = () => document.querySelector('ul.menu').classList.toggle('hide')

const banner = tns({
	container: ".banner-items",
	controls: false,
	mouseDrag: true,
	autoplay: true,
	autoplayButton: false,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	nav: false,
})

const testimonials = tns({
	container: ".testimonial-items",
	controls: false,
	mouseDrag: true,
	autoplay: true,
	autoplayButton: false,
	autoplayButtonOutput: false, autoplayHoverPause: true,
	nav: false,
	responsive: {
		640: {
			items: 2,
		}
	}
})
const partners = tns({
	container: ".partner-items",
	controls: false,
	mouseDrag: true,
	autoplay: true,
	autoplayButton: false,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	nav: false,
	responsive: {
		640: {
			items: 3,
		}
	}
})

const bannerPrev = () => banner.goTo("prev")
const bannerNext = () => banner.goTo("next")

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		document.querySelector('header').classList.add('fixed')
	} else {
		document.querySelector('header').classList.remove('fixed')
	}
})
