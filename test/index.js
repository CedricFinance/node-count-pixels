const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

const countPixels = require('../src/index');

describe('index', () => {
  describe('countPixels', () => {
    it('should count the number of pixels per color', () => {
      return countPixels(__dirname+'/test.png')
        .should.eventually.deep.equal({
          '#000000': 1,
          "#00ff00": 1,
          "#ff0000": 1,
          "#ffffff": 1
      });
    });
  });
});