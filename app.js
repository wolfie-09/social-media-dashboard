const themeSwitcher = document.getElementById('theme-switcher')
const body = document.querySelector("body")
const header =  document.querySelector("header")
const sections = document.querySelectorAll('section')

themeSwitcher.addEventListener('click', () => {
    themeSwitcher.toggleAttribute('checked')
    body.classList.toggle('light')
    header.classList.toggle('light')

    sections.forEach(function(section) {
        section.classList.toggle('light')
    })
})