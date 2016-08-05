const Promise = require('bluebird');
const getPixels = Promise.promisify(require('get-pixels'));

const countPixelsByColor = require('./count');

const images = process.argv.slice(2);

Promise.all(
  images.map(image => {
    return Promise
      .resolve(image)
      .then(getPixels)
      .then(countPixelsByColor)
      .then(counts => ({ name: image, counts }) )
  })
).then(counts => console.log(counts));

