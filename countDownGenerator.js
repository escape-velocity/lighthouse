var countdownGenerator = function (x) {
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
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
