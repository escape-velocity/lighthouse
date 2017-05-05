var countdownGenerator = function (x) {
  var number = x
    return function() {
      var i = number --
      if (i > 0) {
        console.log('T-Minus ' + i)
      } else if (i >= 0) {
        console.log("Blast Off")
      } else if (i <= 0) {
      console.log("Rockets already gone, bub!")
    }
  }
};

var countdown = countdownGenerator(6);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
