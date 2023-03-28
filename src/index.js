import { onPageLoad } from "./initialPageLoad"
import { menuTab } from "./menu"
import { homeTab } from "./home"
import { contactUs } from "./contactus"
import './style.css'

console.log('index.js')
onPageLoad()

const anchorTags = document.querySelectorAll('a')

anchorTags.forEach(li => {
    li.addEventListener('click', function() {
        if (li.textContent === 'Menu') {
            console.log('clicked menu')
            menuTab()
        } else if (li.textContent === 'Home') {
            homeTab()
        } else if (li.textContent === 'Contact Us') {
            contactUs()
        }
    })
})

