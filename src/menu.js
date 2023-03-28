import { createNewElement } from "./createNewElement"

export const menuTab = () => {
    const arrFood = [
        {
            id: 'asada',
            title: 'Asada',
            desc: 'Best Asada ever',
            img: 'https://placehold.jp/c69a5d/ffffff/150x150.png'
        },
        {
            id: 'pollo',
            title: 'Pollo',
            desc: 'Best pollo ever',
            img: 'https://placehold.jp/c69a5d/ffffff/150x150.png'
        },
        {
            id: 'srice',
            title: 'Spanish rice',
            desc: 'Best Spanish rice ever',
            img: 'https://placehold.jp/c69a5d/ffffff/150x150.png'
        },
        {
            id: 'pbeans',
            title: 'Pinto beans',
            desc: 'Best pinto beans ever',
            img: 'https://placehold.jp/c69a5d/ffffff/150x150.png'
        }
    ]

    const mainDiv = document.querySelector('.main-container')
    mainDiv.textContent = ''

    const menuDiv = createNewElement('div', ['menu-container'])
    menuDiv.appendTo('.main-container')

    const menuDivH1 = createNewElement('h1', ['menu-heading'])
    menuDivH1.appendTo('.menu-container')
    menuDivH1.addTextContent('Menu')

    // const meatsMenuDiv = createNewElement('div', ['meats', 'menu'])
    // meatsMenuDiv.appendTo('.menu-container')

    // const asadaH2 = createNewElement('h2')
    // asadaH2.appendTo('.meats')
    // asadaH2.addTextContent('Asada')

    // const asadaP = createNewElement('p')
    // asadaP.appendTo('.meats')

    const createDiv = (arr, classes, h2 = 'h2') => {
        for (let i = 0; i < arr.length; i++) {
            let div = createNewElement('div', classes, ['id', arr[i].id])
            div.appendTo('.menu-container')

            let h2 = createNewElement('h2')
            h2.appendTo(`#${arr[i].id}`)
            h2.addTextContent(arr[i].title)

            let img = createNewElement('img', undefined, ['src', `${arr[i].img}`])
            img.appendTo(`#${arr[i].id}`)

            let desc = createNewElement('p')
            desc.appendTo(`#${arr[i].id}`)
            desc.addTextContent(arr[i].desc)
        }
        

    }
    createDiv(arrFood, ['food-items'], 'h2')
}