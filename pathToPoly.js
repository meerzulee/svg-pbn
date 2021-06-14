require('@svgdotjs/svg.topoly.js');

// returns a window with a document and an svg root node
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow, PathArray } = require('@svgdotjs/svg.js')

// register window and document
registerWindow(window, document)

// create canvas
const canvas = SVG(document.documentElement)



//Path should be: "M214.29,486.9h0c2.93....Z"
module.exports.pathToPoly = (Path) => {
    //path to polygon
    let pointArray = new PathArray(Path).toPoly('5%')
    // console.log(pointArray);
    return pointArray;
}

