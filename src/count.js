var { decimalToHex, pixelsGenerator, pixelToHex } = require('./utils');

function countPixelsByColor(pixels) {
  var counts = {};

  for(let pixel of pixelsGenerator(pixels)) {
      const key = pixelToHex(pixel);
      counts.hasOwnProperty(key) ? counts[key]++ : counts[key] = 1;
  }

  return counts;
}

module.exports = countPixelsByColor;