const date = new Date()
document.querySelector(".current-year").innerHTML = date.getFullYear()
document.querySelector(".last-modified").innerHTML = `Last Updated: ${document.lastModified}`
