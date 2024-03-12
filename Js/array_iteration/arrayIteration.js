const arr1 = [
  [2, 3, 4],
  [5, 6, 7],
];
const arr2 = arr1.flatMap((x) => x);
console.log(arr2.length);

const arrow = () => {};
const map = arr2.map((x) => x * 2);
console.log(map, "map");

const filter = map.filter((val) => val < 10);
console.log(filter, "filter");

let number = "";
arr2.forEach(myfunc);
function myfunc(value) {
  number += value * 5;
}
console.log(number, "forEach");
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//     txt += value + "<br>";
//   }

const eve = arr2.forEach((x) => console.log(x * 5));
console.log(eve);

const any = function () {
  var a = 12;
  var b = 18;
  var c = a + b;
  console.log(c);
};
any()
const any1 = function () {
  var a = 12;
  var b = 18;
  var c = a + b;
  console.log(c);
};
any1()

// (function my() {
//   console.log("hi");
// })();
