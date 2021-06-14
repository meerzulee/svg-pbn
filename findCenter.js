const polylabel = require('polylabel');
let data = []

module.exports.findCenter = (polygon) => {
    data[0] = polygon
    // console.log(data);
    let center = polylabel(data, 5.0)
    console.log(center);
}
