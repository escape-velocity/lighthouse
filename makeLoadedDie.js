
//Review and write

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = 0;

  return function() {
    var number = list[id];
    if (id >= list.length - 1) {
      id = 0;
    } else {
      id++;
    }
    return number;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());