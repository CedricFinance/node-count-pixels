const Promise = require('bluebird');
const getPixels = Promise.promisify(require('get-pixels'));

const countPixelsByColor = require('./count');


function countPixels(image) {
    return Promise
      .resolve(image)
      .then(getPixels)
      .then(countPixelsByColor);
}

module.exports = countPixels;
