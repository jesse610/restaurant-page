/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createNewElement.js":
/*!*********************************!*\
  !*** ./src/createNewElement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewElement": () => (/* binding */ createNewElement)
/* harmony export */ });
const createNewElement = (type, classes = undefined, attibutes = undefined) => {

    const el = document.createElement(type)

    if (classes !== undefined) {
        el.classList.add(...classes)
    }

    if (attibutes != undefined) {
        el.setAttribute(attibutes[0], attibutes[1])
    }

    const appendTo = (element) => {
        document.querySelector(element).appendChild(el)
    }

    const addTextContent = (string) => {
        el.textContent = `${string}`
    }

    return {
        appendTo,
        addTextContent
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onPageLoad": () => (/* binding */ onPageLoad)
/* harmony export */ });
/* harmony import */ var _createNewElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewElement */ "./src/createNewElement.js");



const onPageLoad = () => {
    console.log('on page load.js')
    const content = document.querySelector('#content')
    content.textContent = ''

    const header = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('header', ['header-container'])
    header.appendTo('#content')

    const h1Header = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h1', ['title'])
    h1Header.appendTo('header')
    h1Header.addTextContent('Villa Taqueria Catering')

    // const imgLogo = Element('img', ['header-logo'], ['src', 'https://placehold.co/100x100'])
    // imgLogo.appendTo('header')

    const navHeader = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('nav', ['header-nav'])
    navHeader.appendTo('header')

    const ul = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('ul', ['list-container'])
    ul.appendTo('.header-nav')

    const ali = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a', undefined, ['href', '#'])
    const aMenu = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a', undefined, ['href', '#'])
    const aStory = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a', undefined, ['href', '#'])
    const aContactUs = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('a', undefined, ['href', '#'])

    const homeli = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('li', undefined, ['id', 'home'])
    homeli.appendTo('.list-container')
    ali.appendTo('#home')
    ali.addTextContent('Home')

    const menuli = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('li', undefined, ['id', 'menu'])
    menuli.appendTo('.list-container')
    aMenu.appendTo('#menu')
    aMenu.addTextContent('Menu')

    // const storyli = createNewElement('li', undefined, ['id', 'story'])
    // storyli.appendTo('.list-container')
    // aStory.appendTo('#story')
    // aStory.addTextContent('Our Story')

    const contactUsli = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('li', undefined, ['id', 'contact-us'])
    contactUsli.appendTo('.list-container')
    aContactUs.appendTo('#contact-us')
    aContactUs.addTextContent('Contact Us')

    const main = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('main', ['main-container'])
    main.appendTo('#content')

    const introSection = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('section', ['intro-section'])
    introSection.appendTo('.main-container')

    const introDiv1 = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('div', ['div-left'])
    introDiv1.appendTo('.intro-section')

    const introDiv1H2 = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('h2')
    introDiv1H2.appendTo('.div-left')
    introDiv1H2.addTextContent('Serving the worlds best Mexican food')

    const introDivSpan = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('span')
    introDivSpan.appendTo('.div-left')
    introDivSpan.addTextContent('Authentic | Fresh | Delectable')

    const introDiv1p = (0,_createNewElement__WEBPACK_IMPORTED_MODULE_0__.createNewElement)('p')
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbFBhZ2VMb2FkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHFEOztBQUU5QztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUVBQWdCO0FBQ25DOztBQUVBLHFCQUFxQixtRUFBZ0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixtRUFBZ0I7QUFDdEM7O0FBRUEsZUFBZSxtRUFBZ0I7QUFDL0I7O0FBRUEsZ0JBQWdCLG1FQUFnQjtBQUNoQyxrQkFBa0IsbUVBQWdCO0FBQ2xDLG1CQUFtQixtRUFBZ0I7QUFDbkMsdUJBQXVCLG1FQUFnQjs7QUFFdkMsbUJBQW1CLG1FQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1FQUFnQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1FQUFnQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1FQUFnQjtBQUNqQzs7QUFFQSx5QkFBeUIsbUVBQWdCO0FBQ3pDOztBQUVBLHNCQUFzQixtRUFBZ0I7QUFDdEM7O0FBRUEsd0JBQXdCLG1FQUFnQjtBQUN4QztBQUNBOztBQUVBLHlCQUF5QixtRUFBZ0I7QUFDekM7QUFDQTs7QUFFQSx1QkFBdUIsbUVBQWdCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZU5ld0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxQYWdlTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY3JlYXRlTmV3RWxlbWVudCA9ICh0eXBlLCBjbGFzc2VzID0gdW5kZWZpbmVkLCBhdHRpYnV0ZXMgPSB1bmRlZmluZWQpID0+IHtcblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxuXG4gICAgaWYgKGNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpXG4gICAgfVxuXG4gICAgaWYgKGF0dGlidXRlcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dGlidXRlc1swXSwgYXR0aWJ1dGVzWzFdKVxuICAgIH1cblxuICAgIGNvbnN0IGFwcGVuZFRvID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KS5hcHBlbmRDaGlsZChlbClcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUZXh0Q29udGVudCA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBgJHtzdHJpbmd9YFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwcGVuZFRvLFxuICAgICAgICBhZGRUZXh0Q29udGVudFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgY3JlYXRlTmV3RWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZU5ld0VsZW1lbnRcIlxuXG5leHBvcnQgY29uc3Qgb25QYWdlTG9hZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb24gcGFnZSBsb2FkLmpzJylcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlTmV3RWxlbWVudCgnaGVhZGVyJywgWydoZWFkZXItY29udGFpbmVyJ10pXG4gICAgaGVhZGVyLmFwcGVuZFRvKCcjY29udGVudCcpXG5cbiAgICBjb25zdCBoMUhlYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2gxJywgWyd0aXRsZSddKVxuICAgIGgxSGVhZGVyLmFwcGVuZFRvKCdoZWFkZXInKVxuICAgIGgxSGVhZGVyLmFkZFRleHRDb250ZW50KCdWaWxsYSBUYXF1ZXJpYSBDYXRlcmluZycpXG5cbiAgICAvLyBjb25zdCBpbWdMb2dvID0gRWxlbWVudCgnaW1nJywgWydoZWFkZXItbG9nbyddLCBbJ3NyYycsICdodHRwczovL3BsYWNlaG9sZC5jby8xMDB4MTAwJ10pXG4gICAgLy8gaW1nTG9nby5hcHBlbmRUbygnaGVhZGVyJylcblxuICAgIGNvbnN0IG5hdkhlYWRlciA9IGNyZWF0ZU5ld0VsZW1lbnQoJ25hdicsIFsnaGVhZGVyLW5hdiddKVxuICAgIG5hdkhlYWRlci5hcHBlbmRUbygnaGVhZGVyJylcblxuICAgIGNvbnN0IHVsID0gY3JlYXRlTmV3RWxlbWVudCgndWwnLCBbJ2xpc3QtY29udGFpbmVyJ10pXG4gICAgdWwuYXBwZW5kVG8oJy5oZWFkZXItbmF2JylcblxuICAgIGNvbnN0IGFsaSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2EnLCB1bmRlZmluZWQsIFsnaHJlZicsICcjJ10pXG4gICAgY29uc3QgYU1lbnUgPSBjcmVhdGVOZXdFbGVtZW50KCdhJywgdW5kZWZpbmVkLCBbJ2hyZWYnLCAnIyddKVxuICAgIGNvbnN0IGFTdG9yeSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2EnLCB1bmRlZmluZWQsIFsnaHJlZicsICcjJ10pXG4gICAgY29uc3QgYUNvbnRhY3RVcyA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2EnLCB1bmRlZmluZWQsIFsnaHJlZicsICcjJ10pXG5cbiAgICBjb25zdCBob21lbGkgPSBjcmVhdGVOZXdFbGVtZW50KCdsaScsIHVuZGVmaW5lZCwgWydpZCcsICdob21lJ10pXG4gICAgaG9tZWxpLmFwcGVuZFRvKCcubGlzdC1jb250YWluZXInKVxuICAgIGFsaS5hcHBlbmRUbygnI2hvbWUnKVxuICAgIGFsaS5hZGRUZXh0Q29udGVudCgnSG9tZScpXG5cbiAgICBjb25zdCBtZW51bGkgPSBjcmVhdGVOZXdFbGVtZW50KCdsaScsIHVuZGVmaW5lZCwgWydpZCcsICdtZW51J10pXG4gICAgbWVudWxpLmFwcGVuZFRvKCcubGlzdC1jb250YWluZXInKVxuICAgIGFNZW51LmFwcGVuZFRvKCcjbWVudScpXG4gICAgYU1lbnUuYWRkVGV4dENvbnRlbnQoJ01lbnUnKVxuXG4gICAgLy8gY29uc3Qgc3RvcnlsaSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2xpJywgdW5kZWZpbmVkLCBbJ2lkJywgJ3N0b3J5J10pXG4gICAgLy8gc3RvcnlsaS5hcHBlbmRUbygnLmxpc3QtY29udGFpbmVyJylcbiAgICAvLyBhU3RvcnkuYXBwZW5kVG8oJyNzdG9yeScpXG4gICAgLy8gYVN0b3J5LmFkZFRleHRDb250ZW50KCdPdXIgU3RvcnknKVxuXG4gICAgY29uc3QgY29udGFjdFVzbGkgPSBjcmVhdGVOZXdFbGVtZW50KCdsaScsIHVuZGVmaW5lZCwgWydpZCcsICdjb250YWN0LXVzJ10pXG4gICAgY29udGFjdFVzbGkuYXBwZW5kVG8oJy5saXN0LWNvbnRhaW5lcicpXG4gICAgYUNvbnRhY3RVcy5hcHBlbmRUbygnI2NvbnRhY3QtdXMnKVxuICAgIGFDb250YWN0VXMuYWRkVGV4dENvbnRlbnQoJ0NvbnRhY3QgVXMnKVxuXG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ21haW4nLCBbJ21haW4tY29udGFpbmVyJ10pXG4gICAgbWFpbi5hcHBlbmRUbygnI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgaW50cm9TZWN0aW9uID0gY3JlYXRlTmV3RWxlbWVudCgnc2VjdGlvbicsIFsnaW50cm8tc2VjdGlvbiddKVxuICAgIGludHJvU2VjdGlvbi5hcHBlbmRUbygnLm1haW4tY29udGFpbmVyJylcblxuICAgIGNvbnN0IGludHJvRGl2MSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnZGl2LWxlZnQnXSlcbiAgICBpbnRyb0RpdjEuYXBwZW5kVG8oJy5pbnRyby1zZWN0aW9uJylcblxuICAgIGNvbnN0IGludHJvRGl2MUgyID0gY3JlYXRlTmV3RWxlbWVudCgnaDInKVxuICAgIGludHJvRGl2MUgyLmFwcGVuZFRvKCcuZGl2LWxlZnQnKVxuICAgIGludHJvRGl2MUgyLmFkZFRleHRDb250ZW50KCdTZXJ2aW5nIHRoZSB3b3JsZHMgYmVzdCBNZXhpY2FuIGZvb2QnKVxuXG4gICAgY29uc3QgaW50cm9EaXZTcGFuID0gY3JlYXRlTmV3RWxlbWVudCgnc3BhbicpXG4gICAgaW50cm9EaXZTcGFuLmFwcGVuZFRvKCcuZGl2LWxlZnQnKVxuICAgIGludHJvRGl2U3Bhbi5hZGRUZXh0Q29udGVudCgnQXV0aGVudGljIHwgRnJlc2ggfCBEZWxlY3RhYmxlJylcblxuICAgIGNvbnN0IGludHJvRGl2MXAgPSBjcmVhdGVOZXdFbGVtZW50KCdwJylcbiAgICBpbnRyb0RpdjFwLmFwcGVuZFRvKCcuZGl2LWxlZnQnKVxuICAgIGludHJvRGl2MXAuYWRkVGV4dENvbnRlbnQoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEN1cmFiaXR1ciBzb2RhbGVzIGRpYW0gc2VtLCB2ZWwgdm9sdXRwYXQgbnVuYyB0aW5jaWR1bnQgYXQuIFNlZCBldSBudWxsYSBldSBudW5jIGV1aXNtb2Qgc29sbGljaXR1ZGluIGFjIGFjIGFudGUuIEFlbmVhbiB2ZWwgZXN0IGxpZ3VsYS4gVmVzdGlidWx1bSB1dCBsYWN1cyB2aXRhZSBhdWd1ZSBsdWN0dXMgZGlnbmlzc2ltIGlkIHVsdHJpY2VzIG1pLiBBbGlxdWFtIHNhcGllbiBsZWN0dXMsIHZhcml1cyBhYyByaG9uY3VzIGlkLCB0aW5jaWR1bnQgc2l0IGFtZXQgYXJjdS4nKVxuXG4gICAgLy8gY29uc3QgaW50cm9EaXYyID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydkaXYtcmlnaHQnXSlcbiAgICAvLyBpbnRyb0RpdjIuYXBwZW5kVG8oJy5pbnRyby1zZWN0aW9uJylcblxuICAgIC8vIGNvbnN0IGludHJvRGl2MmltZyA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2ltZycsIFsnZGl2LTItaW1nJ10sIFsnc3JjJywgJ2h0dHBzOi8vcGxhY2Vob2xkLmNvLzMwMHgzMDAnXSlcbiAgICAvLyBpbnRyb0RpdjJpbWcuYXBwZW5kVG8oJy5kaXYtcmlnaHQnKVxuXG4vLyAgICAgY29uc3QgY2F0ZXJTZWN0aW9uID0gY3JlYXRlTmV3RWxlbWVudCgnc2VjdGlvbicsIFsnY2F0ZXItc2VjdGlvbiddKVxuLy8gICAgIGNhdGVyU2VjdGlvbi5hcHBlbmRUbygnLm1haW4tY29udGFpbmVyJylcblxuLy8gICAgIGNvbnN0IGNhdGVyaDIgPSBjcmVhdGVOZXdFbGVtZW50KCdoMicsIFsnY2F0ZXItaGVhZGluZyddKVxuLy8gICAgIGNhdGVyaDIuYXBwZW5kVG8oJy5jYXRlci1zZWN0aW9uJylcbi8vICAgICBjYXRlcmgyLmFkZFRleHRDb250ZW50KCdXZSBjYXRlciBhbGwgZXZlbnQgdHlwZXMnKVxuXG4vLyAgICAgY29uc3QgcmVzQ29ycERpdiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsncmVzLWNvcnAtY29udGFpbmVyJ10pXG4vLyAgICAgcmVzQ29ycERpdi5hcHBlbmRUbygnLmNhdGVyLXNlY3Rpb24nKVxuXG4vLyAgICAgY29uc3QgcmVzaWRlbnRpYWxEaXYgPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ3Jlc2lkZW50aWFsLWNvbnRhaW5lciddKVxuLy8gICAgIHJlc2lkZW50aWFsRGl2LmFwcGVuZFRvKCcucmVzLWNvcnAtY29udGFpbmVyJylcbiAgICBcbi8vICAgICBjb25zdCByZXNpZGVudGlhbGltZyA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2ltZycsIFsncmVzaWRlbnRpYWwtaW1nJ10sIFsnc3JjJywgJ2h0dHBzOi8vcGxhY2Vob2xkLmNvLzMwMHgzMDAnXSlcbi8vICAgICByZXNpZGVudGlhbGltZy5hcHBlbmRUbygnLnJlc2lkZW50aWFsLWNvbnRhaW5lcicpXG5cbi8vICAgICBjb25zdCByZXNpZGVudGlhbHAgPSBjcmVhdGVOZXdFbGVtZW50KCdwJylcbi8vICAgICByZXNpZGVudGlhbHAuYXBwZW5kVG8oJy5yZXNpZGVudGlhbC1jb250YWluZXInKVxuLy8gICAgIHJlc2lkZW50aWFscC5hZGRUZXh0Q29udGVudCgnUmVzaWRlbnRpYWwgY29udGFpbmVyIGltZyBjYXB0aW9uJylcblxuLy8gICAgIGNvbnN0IGNvcnBvcmF0ZURpdiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnY29ycG9yYXRlLWNvbnRhaW5lciddKVxuLy8gICAgIGNvcnBvcmF0ZURpdi5hcHBlbmRUbygnLnJlcy1jb3JwLWNvbnRhaW5lcicpXG5cbi8vICAgICBjb25zdCBjb3Jwb3JhdGVpbWcgPSBjcmVhdGVOZXdFbGVtZW50KCdpbWcnLCBbJ2NvcnBvcmF0ZS1pbWcnXSwgWydzcmMnLCAnaHR0cHM6Ly9wbGFjZWhvbGQuY28vMzAweDMwMCddKVxuLy8gICAgIGNvcnBvcmF0ZWltZy5hcHBlbmRUbygnLmNvcnBvcmF0ZS1jb250YWluZXInKVxuXG4vLyAgICAgY29uc3QgY29ycG9yYXRlcCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3AnKVxuLy8gICAgIGNvcnBvcmF0ZXAuYXBwZW5kVG8oJy5jb3Jwb3JhdGUtY29udGFpbmVyJylcbi8vICAgICBjb3Jwb3JhdGVwLmFkZFRleHRDb250ZW50KCdDb3Jwb3JhdGlvbiBjb250YWluZXIgaW1nIGNhcHRpb24nKVxuICAgIFxuLy8gICAgIGNvbnN0IGNpcmNsZVNlY3Rpb24gPSBjcmVhdGVOZXdFbGVtZW50KCdzZWN0aW9uJywgWydjaXJjbGUtc2VjdGlvbiddKVxuLy8gICAgIGNpcmNsZVNlY3Rpb24uYXBwZW5kVG8oJy5tYWluLWNvbnRhaW5lcicpXG5cbi8vICAgICBjb25zdCBjaXJjbGUxID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydjaXJjbGUnICwnY2lyY2xlLTEnXSlcbi8vICAgICBjaXJjbGUxLmFwcGVuZFRvKCcuY2lyY2xlLXNlY3Rpb24nKVxuXG4vLyAgICAgY29uc3QgdmVnYW5JY29uID0gY3JlYXRlTmV3RWxlbWVudCgnaScsIFsnZmEtc29saWQnLCAnZmEtc2VlZGxpbmcnXSlcbi8vICAgICB2ZWdhbkljb24uYXBwZW5kVG8oJy5jaXJjbGUtMScpXG5cbi8vICAgICBjb25zdCBjaXJjbGUxU3BhbiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3NwYW4nKVxuLy8gICAgIGNpcmNsZTFTcGFuLmFwcGVuZFRvKCcuY2lyY2xlLTEnKVxuLy8gICAgIGNpcmNsZTFTcGFuLmFkZFRleHRDb250ZW50KCdWZWdhbiBvcHRpb25zIGF2YWlsYWJsZSEnKVxuXG4vLyAgICAgY29uc3QgY2lyY2xlMiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnY2lyY2xlJyAsJ2NpcmNsZS0yJ10pXG4vLyAgICAgY2lyY2xlMi5hcHBlbmRUbygnLmNpcmNsZS1zZWN0aW9uJylcblxuLy8gICAgIGNvbnN0IGdsdXRlbkljb24gPSBjcmVhdGVOZXdFbGVtZW50KCdpJywgWydmYS1zb2xpZCcsICAnZmEtd2hlYXQtYXduLWNpcmNsZS1leGNsYW1hdGlvbiddKVxuLy8gICAgIGdsdXRlbkljb24uYXBwZW5kVG8oJy5jaXJjbGUtMicpXG4gICAgXG4vLyAgICAgY29uc3QgY2lyY2xlMnNwYW4gPSBjcmVhdGVOZXdFbGVtZW50KCdzcGFuJylcbi8vICAgICBjaXJjbGUyc3Bhbi5hcHBlbmRUbygnLmNpcmNsZS0yJylcbi8vICAgICBjaXJjbGUyc3Bhbi5hZGRUZXh0Q29udGVudCgnR2x1dGVuLWZyZWUgb3B0aW9ucyBhdmFpbGFibGUhJylcbi8vIFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==