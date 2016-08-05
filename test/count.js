const ndarray = require('ndarray');
const chai = require('chai');
chai.should()

const countPixelsByColor = require('../src/count');

describe('count', () => {
  describe('countPixelsByColor', () => {
    it('should count the number of pixels per color', () => {
      countPixelsByColor(ndarray([0,0,0,255,255,255,255,255,255],[3,1,3]))
        .should.deep.equal({ '#000000': 1, '#ffffff': 2 });
    });
  });
});