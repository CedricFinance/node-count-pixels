const ndarray = require('ndarray');
const chai = require('chai');

const { decimalToHex, pixelsGenerator, pixelToHex } = require('../src/utils');
chai.should()

describe('utils', () => {
  describe('decimalToHex', () => {
    it('should convert to hexadecimal', () => {
      decimalToHex(32).should.equal("20");
    })
    it('should pad with 0 when the number is less than 16', () => {
      decimalToHex(10).should.equal("0a");
    })
  });

  describe('pixelsGenerator', () => {
    it('should produce pixels', () => {
      const generator = pixelsGenerator(ndarray([1,2,3,4,5,6,7,8,9,10,11,12], [1,3,4]));
      generator.next().value.should.deep.equal([1,2,3,4]);
      generator.next().value.should.deep.equal([5,6,7,8]);
      generator.next().value.should.deep.equal([9,10,11,12]);
    })
  });

  describe('pixelToHex', () => {
    it('should return the hexadecimal color code', () => {
      pixelToHex([0,0,0]).should.equal('#000000');
      pixelToHex([255,255,255]).should.equal('#ffffff');
      pixelToHex([240,141,23]).should.equal('#f08d17');
    })
  })
});