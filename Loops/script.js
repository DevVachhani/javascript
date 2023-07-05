console.log("loop");
let text = "";
let numbers = "";
let sum = 0;
function forloops() {
  for (let i = 0; i <= 10; i++) {
    numbers = numbers + i;
  }
  document.getElementById("forone").innerHTML = numbers;

  const students = ["dev", "vasu", "nand", "shayam", "rohan"];
  for (let i = 0; i < students.length; i++) {
    text = text + students[i] + "<br>";
  }
  document.getElementById("arrayone").innerHTML = text;

  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  console.log(sum);
  document.getElementById("sum").innerHTML = sum;
}

function whileloops() {
  const people = ["dev", "vasu", "jay", "nand"];
  const peoplecount = people.length;
  let i = 1;
  let j = 0;
  let k = 2;
  let x = 0;
  while (i <= 10) {
    if (i % 2 == 0) {
      console.log(i);
    }
    i++;
  }

  while (j < peoplecount) {
    console.log(people[j]);
    j++;
  }

  while (x < 20) {
    if (k ** x == 1024) {
      console.log(k ** x);
      break;
    }

    x++;
  }
}

function dowhileloops() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
  {
  }

  const MIN = 1;
  const MAX = 10;

  let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  console.log(secretNumber);

  let hint = "";
  let number = 0;
  do {
    // get input from user
    let input = prompt(
      `Please enter a number between ${MIN} and ${MAX}` + hint
    );

    number = parseInt(input);

    if (number > secretNumber) {
      hint = ", and less than " + number;
    } else if (number < secretNumber) {
      hint = ", and greater than " + number;
    } else if (number == secretNumber) {
      alert(`Bravo! you're correct.`);
    }
  } while (number != secretNumber);
}

function nestedloops() {
  const number = Number(prompt("enter the num"));
  console.log(number);

  for (let i = 0; i <= 10; i++) {
    console.log(i);
    for (let y = 0; y <= 10; y++) {
      let result = i * y;
      console.log(`${i} * ${y} = ${result}`);
    }
  }

  const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (let m = 0; m < array2D.length; m++) {
    for (let n = 0; n < array2D[m].length; n++) {
      console.log(array2D[m][n]);
    }
  }

  const array1 = [1, 2, 3];
  const array2 = ["a", "b", "c"];

  for (let e = 0; e < array1.length; e++) {
    for (let f = 0; f < array2.length; f++) {
      const combination = array1[e] + " " + array2[f];
      console.log(combination);
    }
  }
}

function loopControl() {
  const arr1 = ["5", "4", "3", "7", "6", "9"];
  const target = 6;
  let found = false;
  let index = -1;
  var a = 0;
  var x = 0;
  while (a < 20) {
    if (a == 5) {
      break;
    }
    a = a + 1;
    console.log(a);
  }

  while (x < 10) {
    x = x + 1;
    if (x == 5) {
      continue;
    }
    console.log(x);
  }

  for (let c = 0; c < arr1.length; c++) {
    if (arr1[c] == target) {
      found = true;
      index = c;
      break;
    }
  }
  if (found) {
    console.log(`target ${target} found at index ${index}`);
  } else {
    console.log(`target ${target} not found in array`);
  }
}
