
import { createNewElement } from "./createNewElement"

export const onPageLoad = () => {
    console.log('on page load.js')
    const content = document.querySelector('#content')
    content.textContent = ''

    const header = createNewElement('header', ['header-container'])
    header.appendTo('#content')

    const h1Header = createNewElement('h1', ['title'])
    h1Header.appendTo('header')
    h1Header.addTextContent('Villa Taqueria Catering')

    // const imgLogo = Element('img', ['header-logo'], ['src', 'https://placehold.co/100x100'])
    // imgLogo.appendTo('header')

    const navHeader = createNewElement('nav', ['header-nav'])
    navHeader.appendTo('header')

    const ul = createNewElement('ul', ['list-container'])
    ul.appendTo('.header-nav')

    const ali = createNewElement('a', undefined, ['href', '#'])
    const aMenu = createNewElement('a', undefined, ['href', '#'])
    const aStory = createNewElement('a', undefined, ['href', '#'])
    const aContactUs = createNewElement('a', undefined, ['href', '#'])

    const homeli = createNewElement('li', undefined, ['id', 'home'])
    homeli.appendTo('.list-container')
    ali.appendTo('#home')
    ali.addTextContent('Home')

    const menuli = createNewElement('li', undefined, ['id', 'menu'])
    menuli.appendTo('.list-container')
    aMenu.appendTo('#menu')
    aMenu.addTextContent('Menu')

    // const storyli = createNewElement('li', undefined, ['id', 'story'])
    // storyli.appendTo('.list-container')
    // aStory.appendTo('#story')
    // aStory.addTextContent('Our Story')

    const contactUsli = createNewElement('li', undefined, ['id', 'contact-us'])
    contactUsli.appendTo('.list-container')
    aContactUs.appendTo('#contact-us')
    aContactUs.addTextContent('Contact Us')

    const main = createNewElement('main', ['main-container'])
    main.appendTo('#content')

    const introSection = createNewElement('section', ['intro-section'])
    introSection.appendTo('.main-container')

    const introDiv1 = createNewElement('div', ['div-left'])
    introDiv1.appendTo('.intro-section')

    const introDiv1H2 = createNewElement('h2')
    introDiv1H2.appendTo('.div-left')
    introDiv1H2.addTextContent('Serving the worlds best Mexican food')

    const introDivSpan = createNewElement('span')
    introDivSpan.appendTo('.div-left')
    introDivSpan.addTextContent('Authentic | Fresh | Delectable')

    const introDiv1p = createNewElement('p')
    introDiv1p.appendTo('.div-left')
    introDiv1p.addTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam sem, vel volutpat nunc tincidunt at. Sed eu nulla eu nunc euismod sollicitudin ac ac ante. Aenean vel est ligula. Vestibulum ut lacus vitae augue luctus dignissim id ultrices mi. Aliquam sapien lectus, varius ac rhoncus id, tincidunt sit amet arcu.')

    // const introDiv2 = createNewElement('div', ['div-right'])
    // introDiv2.appendTo('.intro-section')

    // const introDiv2img = createNewElement('img', ['div-2-img'], ['src', 'https://placehold.co/300x300'])
    // introDiv2img.appendTo('.div-right')

//     const caterSection = createNewElement('section', ['cater-section'])
//     caterSection.appendTo('.main-container')

//     const caterh2 = createNewElement('h2', ['cater-heading'])
//     caterh2.appendTo('.cater-section')
//     caterh2.addTextContent('We cater all event types')

//     const resCorpDiv = createNewElement('div', ['res-corp-container'])
//     resCorpDiv.appendTo('.cater-section')

//     const residentialDiv = createNewElement('div', ['residential-container'])
//     residentialDiv.appendTo('.res-corp-container')
    
//     const residentialimg = createNewElement('img', ['residential-img'], ['src', 'https://placehold.co/300x300'])
//     residentialimg.appendTo('.residential-container')

//     const residentialp = createNewElement('p')
//     residentialp.appendTo('.residential-container')
//     residentialp.addTextContent('Residential container img caption')

//     const corporateDiv = createNewElement('div', ['corporate-container'])
//     corporateDiv.appendTo('.res-corp-container')

//     const corporateimg = createNewElement('img', ['corporate-img'], ['src', 'https://placehold.co/300x300'])
//     corporateimg.appendTo('.corporate-container')

//     const corporatep = createNewElement('p')
//     corporatep.appendTo('.corporate-container')
//     corporatep.addTextContent('Corporation container img caption')
    
//     const circleSection = createNewElement('section', ['circle-section'])
//     circleSection.appendTo('.main-container')

//     const circle1 = createNewElement('div', ['circle' ,'circle-1'])
//     circle1.appendTo('.circle-section')

//     const veganIcon = createNewElement('i', ['fa-solid', 'fa-seedling'])
//     veganIcon.appendTo('.circle-1')

//     const circle1Span = createNewElement('span')
//     circle1Span.appendTo('.circle-1')
//     circle1Span.addTextContent('Vegan options available!')

//     const circle2 = createNewElement('div', ['circle' ,'circle-2'])
//     circle2.appendTo('.circle-section')

//     const glutenIcon = createNewElement('i', ['fa-solid',  'fa-wheat-awn-circle-exclamation'])
//     glutenIcon.appendTo('.circle-2')
    
//     const circle2span = createNewElement('span')
//     circle2span.appendTo('.circle-2')
//     circle2span.addTextContent('Gluten-free options available!')
// 
}