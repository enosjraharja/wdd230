const date = new Date()
document.querySelector('.year').innerHTML = date.getFullYear()

/**
 * Toggle class based on class in the same element
 * @params selector String or Array if want to toggle at many elements
 * @params cls The class who want to be toggle
 */
const toggleClass = (selector, cls) => {
  const typeOfData = Object.prototype.toString.call(selector)
  if (typeOfData === '[object String]')
    document.querySelector(selector).classList.toggle(cls)
  if (typeOfData === '[object Array]')
    selector.forEach((e) => document.querySelector(e).classList.toggle(cls))
}

;['.burger_button', '.overlay'].forEach((e) => {
  document
    .querySelector(e)
    .addEventListener('click', () => toggleClass(['nav', '.overlay'], '--hide'))
})
;['.mode_button'].forEach((e) =>
  document.querySelector(e).addEventListener('click', () => {
		toggleClass('html', 'mode--dark')
    localStorage.setItem(
      'mode',
      localStorage.getItem('mode') == 'dark' ? 'light' : 'dark'
    )
  })
)
