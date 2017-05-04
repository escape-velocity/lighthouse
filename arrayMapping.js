

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj) {
   // x squared plus y squared added to get square root of Z
   var x2 = Math.pow(obj.x, 2);
   var y2 = Math.pow(obj.y, 2);
   var sumofsq = x2 + y2;
   var z2 = Math.sqrt(sumofsq)
   var { x, y } = obj;

   // return Math.sqrt( (x*x) + (y*y) );


    return z2;
});
console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);