('use strict');

var easingFn = function easingFn(t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
};

var options = {
  startVal: 0.0,
  decimalPlaces: 1,
  easingFn: easingFn,
};
var demo = new CountUp('number_01', 1.1, options);

if (!demo.error) {
  setTimeout(demo.start(), 1000);
} else {
  console.error(demo.error);
}

window.onload = function () {
  var easingFn = function easingFn(t, b, c, d) {
    var ts = (t /= d) * t;
    var tc = ts * t;
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
  };

  let options = {
    easingFn: easingFn,
  };
  let number = new CountUp('number_02', 8, options);

  if (!number.error) {
    number.start();
  } else {
    console.error(number.error);
  }

};