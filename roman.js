// roman.js: Roman Numbering System

var V = [1,5,10,50,100,500,1000], R = ['I','V','X','L','C','D','M'];

exports.val = function(rom) {
  var v = 0, i = 0, p = 0, c = 0;
  while (i < rom.length) {
    var p = V[R.indexOf(rom[i].toUpperCase())], c = (i<rom.length-1 ? V[R.indexOf(rom[i+1].toUpperCase())] : 0);
    if (p < c) {v += c - p; i++;}
    else v += p;
    i++;
  }
  return v;
}

exports.rom = function(val) {
  var r = '', v = val;
  for (var i = 6; i >= 0; i--) {
    while (v >= V[i]) {v -= V[i]; r += R[i];}
    if (i > 0 && v >= V[i]-V[i-2+i%2]) {v -= V[i]-V[i-2+i%2]; r += R[i-2+i%2]+R[i];}
  }
  return r;
}
