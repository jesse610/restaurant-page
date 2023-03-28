import { createNewElement } from "./createNewElement"

export const homeTab = () => {
    const mainDiv = document.querySelector('.main-container')
    mainDiv.textContent = ''

    const introSection = createNewElement('section', ['intro-section'])
    introSection.appendTo('.main-container')

    const divLeft = createNewElement('div', ['div-left'])
    divLeft.appendTo('.intro-section')
    
    const divLefth2 = createNewElement('h2')
    divLefth2.appendTo('.div-left')
    divLefth2.addTextContent('Serving the worlds best Mexican food')

    const divLeftspan = createNewElement('span')
    divLeftspan.appendTo('.div-left')
    divLeftspan.addTextContent('Authentic | Fresh | Delectable')

    const divLeftp = createNewElement('p')
    divLeftp.appendTo('.div-left')
    divLeftp.addTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam sem, vel volutpat nunc tincidunt at. Sed eu nulla eu nunc euismod sollicitudin ac ac ante. Aenean vel est ligula. Vestibulum ut lacus vitae augue luctus dignissim id ultrices mi. Aliquam sapien lectus, varius ac rhoncus id, tincidunt sit amet arcu.')
}