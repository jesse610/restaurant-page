import { createNewElement } from "./createNewElement"

export const contactUs = () => {
    const information = 
    {

    }
    const mainDiv = document.querySelector('.main-container')
    mainDiv.textContent = ''

    const div = createNewElement('div', ['contact-us-container'])
    div.appendTo('.main-container')

    const divh1 = createNewElement('h1')
    divh1.appendTo('.contact-us-container')
    divh1.addTextContent('Contact us today')

    const spanphone = createNewElement('span')
    spanphone.appendTo('.contact-us-container')
    spanphone.addTextContent('By phone: 555-555-5555')

    const spanemail = createNewElement('span')
    spanemail.appendTo('.contact-us-container')
    spanemail.addTextContent('By email: totallyrealemail@gmeil.xom')

    const spanInstagram = createNewElement('span')
    spanInstagram.appendTo('.contact-us-container')
    spanInstagram.addTextContent('By instagram: totallyrealuser')

}