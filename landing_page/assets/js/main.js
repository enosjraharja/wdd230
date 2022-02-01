let banner, bannerPrev, bannerNext, testimonials, partners

const toggleMenu = () =>
  document.querySelector('ul.menu').classList.toggle('hide')

if (document.querySelector('.banner-items') != undefined) {
  banner = tns({
    container: '.banner-items',
    controls: false,
    mouseDrag: true,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    nav: false,
  })

  bannerPrev = () => banner.goTo('prev')
  bannerNext = () => banner.goTo('next')
}

if (document.querySelector('.testimonial-items') != undefined) {
  testimonials = tns({
    container: '.testimonial-items',
    controls: false,
    mouseDrag: true,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      640: {
        items: 2,
      },
    },
  })
}

partners = tns({
  container: '.partner-items',
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
    },
  },
})

window.addEventListener('scroll', () => {
  (window.scrollY > 200)
    ? document.querySelector('header').classList.add('fixed')
    : document.querySelector('header').classList.remove('fixed')
})

if (document.querySelector('.single-services') != undefined) {
	const articles = document.querySelectorAll('.single-services article')
	document.querySelectorAll('.single-services li').forEach((e, i) => {
		e.addEventListener('click', () => {
			articles.forEach(a => (a == articles[i]) ? a.classList.add('active') : a.classList.remove('active'))
		})
	})
} 
