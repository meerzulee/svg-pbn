const fs = require('fs');
// returns a window with a document and an svg root node
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')
const { parse } = require('svg-parser');
// let testFile = fs.readFileSync('testSVG.svg', 'utf-8')
let testFile = fs.readFileSync('./assets/test.svg', 'utf-8')

registerWindow(window, document)
const canvas = SVG(document.documentElement)

// let draw = SVG('drawing')




const parsed = parse(testFile)
console.log(parsed.children[0].children);

// let store = canvas.svg(testFile)


// let childNodes = 

// childNodes.forEach((value, index, array) => {
//     console.log(value);
// })
// console.log(store);

// // use svg.js as normal
// canvas.rect(100, 100).fill('yellow').move(50, 50)

// // get your svg as string
// console.log(canvas.svg())

// // console.log(canvas.node.outerHTML)

// fs.writeFile('testSVG.svg', canvas.svg(), (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log('SVG written!');
// });


