console.log("hello");

let text = "dev vachhani";
let length = text.length;
console.log(length);

// len.textContent = length;

function fooddisplay() {
  let a = prompt("enter a first name");
  let b = prompt("enter a last name");

  let con = a.concat(b);
  console.log(con);
  document.getElementById("strcon").innerHTML = con;

  let upp = a.toUpperCase();
  console.log(upp);
  document.getElementById("strup").innerHTML = upp;

  let low = b.toLowerCase();
  console.log(low);
  document.getElementById("strlow").innerHTML = low;
}

function substr() {
  const num = Number(document.getElementById("nums").value);
  const val = document.getElementById("subs").value;
  console.log(val);
  let sub = val.substring(num);
  console.log(sub);
  document.getElementById("sub").innerHTML = sub;
}

function reples() {
  let text = document.getElementById("rep").innerHTML;
  const nameRepl = document.getElementById("replwith").value;
  console.log(nameRepl);

  document.getElementById("rep").innerHTML = text.replace("Hello", nameRepl);
}

let array = ["2", "4", "5", "6", "8", "9"];
console.log(array.length);

function arrypromp() {
  let color = ["red", "Orange", "black", "blue"];
  console.log(color);

  let pus = color.push("white");
  console.log(color);

  let poparray = color.pop();
  console.log(color);

  var concatenatedString = color.join(", ");
  console.log(concatenatedString);
}

function extractArrayPortion(array, startIndex, endIndex) {
  var portion = array.slice(startIndex, endIndex + 1);
  return portion;
}
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
var start = 2;
var end = 12;
var extractedPortion = extractArrayPortion(inputArray, start, end);
console.log(extractedPortion);
const check = inputArray.find(checker);
console.log(check);

const filte = inputArray.filter(checker);
console.log(filte);

function checker(inputArray) {
  return inputArray > 10;
}

function spreadopratorss() {
  const arr1 = ["a", "b", "c", "d"];
  const arr2 = ["e", "f", "g", "h"];

  const combine = [...arr1, ...arr2];
  console.log(combine);

  const a1 = [...arr1];
  const m1 = a1.push("5");
  console.log(a1);
  console.log(...arr1);
  console.log(...arr2);

  var obj1 = { name: "dev", age: 22 };
  var obj2 = { city: "ahemdabad", country: "india" };

  var mergedObject = { ...obj1, ...obj2 };

  console.log(mergedObject);

  function logPersonDetails(name, age, city) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
  }
  var personDetails = ["nand", 30, "india"];

  logPersonDetails(...personDetails);
}

function summistion(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}
console.log(summistion(1, 2));
console.log(summistion(1, 2, 3));
console.log(summistion(1, 2, 3, 4, 5));

let num1 = [1, -2, 3, 4];
let num2 = [8, 3, -8, 1];

console.log(Math.max(...num1, ...num2));

const nums = [...num1, ...num2];
console.log(nums);

function findEvenNumbers(...numbers) {
  let evenNumbers = numbers.filter((number) => number % 2 === 0);
}

function findoddNumbers(...numbers) {
  let oddNumbers = numbers.filter((number) => number % 2 !== 0);

  return oddNumbers;
}

findoddNumbers(10, 11, 12, 13, 14, 15);

function concatenateStrings(...strings) {
  return strings.join("");
}

console.log(concatenateStrings("Hello", " ", "world", "!"));

var ary = [11, 65, 193, 36, 209, 664, 32];
ary.sort((a, b) => a - b);
ary.reverse();

console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);

let ar2 = [40, 50, 30, 40, 50, 30, 30];
let n = ar2.length;

function mostoccure(array, n) {
  array.sort();

  let maxcount = 1,
    res = array[0];
  let currcount = 1;

  for (let i = 1; i < n; i++) {
    if (array[i] == array[i - 1]) currcount++;
    else currcount = 1;

    if (currcount > maxcount) {
      maxcount = currcount;
      res = array[i - 1];
    }
  }
  return res;
}

console.log(mostoccure(ar2, n));

const ar1 = [1, 2, 4, 5, 6];

const index = 1;
const newa1 = [...ar1.slice(0, index), 8, ...ar1.splice(index)];

console.log(newa1);

const ar = [
  "wordpress",
  "shofipy",
  "web-d",
  "react",
  "node",
  "ang",
  "flutter",
  "digital",
  "seo",
];
const ar3 = ["shofipy", "seo", "react"];
const uni1 = [...ar3, ...ar];
const ui = [...new Set(uni1)];
// const newa3 = ar3.concat(ar);

// let unique = newa3.filter(function (item, index) {
//   return newa3.indexOf(item) === index;
// });
console.log(ui);

let returnlarge = (arr, num) => {
  let new1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      new1.push(arr[i]);
    }
  }
  return new1[0];
};
console.log(returnlarge([4, 9, 16, 25, 29], 18));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function checkpalindrome(str) {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return console.log("its not plaindrome");
    }
  }
  console.log("its plaindrome");
}
checkpalindrome("madam");

function countchar(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    var char = str[i];

    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  return count;
}

console.log(countchar("hello"));

// parten tasks

let star = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  star = star + "\n";
}

console.log(star);

let star2 = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    star2 = star2 + " ";
  }
  for (let num = 1; num <= 2 * i - 1; num++) {
    star2 = star2 + "*";
  }
  star2 = star2 + "\n";
}

console.log(star2);

let n2 = 5;
let string = "";

for (let i = 1; i <= n2; i++) {
  for (let j = n2; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n2 - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = (n2 - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
