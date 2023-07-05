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
