
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 31 }
];
students.sort(function(a, b) {
  // var nameA = a.name; // ignore upper and lowercase
  // var nameB = b.name; // ignore upper and lowercase
  // var ageA = a.age;
  // var ageB = b.age;
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
if(a.name === b.name) {
  return b.age - a.age;
  }
});


  // students.sort(function(a,b){
  //     var nameA = a.name;
  //     var nameB= b.name;
  //     if (nameA < nameB) {
  //   return -1;
  // }



    console.log(students);
