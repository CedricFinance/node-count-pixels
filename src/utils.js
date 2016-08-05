function decimalToHex(value) {
  let str = value.toString(16);
  if (str.length === 1) {
    return "0"+str;
  }
  return str;
}

function* pixelsGenerator(pixels) {
  let x, y, c;

  for(x = 0; x < pixels.shape[0]; x++) {
    for(y = 0; y < pixels.shape[1]; y++) {
      yield [0,1,2].map(c => pixels.get(x, y, c));
    }
  }
}

function pixelToHex(pixel) {
  return "#"+pixel.map(decimalToHex).join('');
}

module.exports = {
  decimalToHex,
  pixelsGenerator,
  pixelToHex,
};