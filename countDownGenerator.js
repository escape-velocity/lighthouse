var countdownGenerator = function (x) {
<<<<<<< HEAD
var Number = x
return function() {
var i = Number --
if (i){
  console.log(i--)
} else if (i >= 0) {
  console.log("Blast Off")
}


};

var countdown = countdownGenerator(3);
=======
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
>>>>>>> be97f515c8bd7d88010afa1d3bd1912e80b2147b
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
<<<<<<< HEAD
=======
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
>>>>>>> be97f515c8bd7d88010afa1d3bd1912e80b2147b
