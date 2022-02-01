let bannerPrev, bannerNext

const toggleMenu = () => document.querySelector('ul.menu').classList.toggle('hide')

if (document.querySelector('.banner-items') != undefined) {
  const banner = tns({
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

const testimonials = tns({
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
const partners = tns({
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
  if (window.scrollY > 200) {
    document.querySelector('header').classList.add('fixed')
  } else {
    document.querySelector('header').classList.remove('fixed')
  }
})
