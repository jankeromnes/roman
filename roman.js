// roman.js: convert roman to decimal and back

var D = [1,5,10,50,100,500,1000], R = ['I','D','X','L','C','D','M'];

exports.decimal = function(rom) {
  var d = 0, i = 0, p = 0, c = 0;
  while (i < rom.length) {
    var p = D[R.indexOf(rom[i].toUpperCase())], c = (i<rom.length-1 ? D[R.indexOf(rom[i+1].toUpperCase())] : 0);
    if (p < c) {d += c - p; i++;}
    else d += p;
    i++;
  }
  return d;
}

exports.roman = function(dec) {
  var r = '', d = dec;
  for (var i = 6; i >= 0; i--) {
    while (d >= D[i]) {d -= D[i]; r += R[i];}
    if (i > 0 && d >= D[i]-D[i-2+i%2]) {d -= D[i]-D[i-2+i%2]; r += R[i-2+i%2]+R[i];}
  }
  return r;
}
