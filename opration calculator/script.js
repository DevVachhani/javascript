const x = 23;
const y = 34;
const z = 56;

if (x > y && x > z) {
  console.log(x);
} else if (y > x && y > z) {
  console.log(y);
} else if (z > x && z > y) {
  console.log(z);
}

// const val = document.querySelector(".input1").textContent;
// console.log(val);

function appendValue(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let selectedvalue = document.getElementById("display").value;
  let result = eval(selectedvalue);
  document.getElementById("display").value = result;

  console.log(result);

  if (result % 2 === 0) {
    document.querySelector(
      ".descriptions"
    ).innerHTML = `${result} is even number`;
  } else {
    document.querySelector(
      ".descriptions"
    ).innerHTML = `${result} is odd number`;
  }

  let isPrime = true;
  if (result > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < result; i++) {
      if (result % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      document.querySelector(
        ".primecheck"
      ).innerHTML = `${result} is a prime number`;
    } else {
      document.querySelector(
        ".primecheck"
      ).innerHTML = `${result} is  NOT a prime number`;
    }
  }

  const squreR = Math.sqrt(result);
  console.log(squreR);

  document.querySelector(
    ".sqnum"
  ).innerHTML = `SqureRoot of ${result} is ${squreR}`;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function convert() {
  const d1 = document.getElementById("inFe").value;

  const digree1 = Number(d1);
  const digree2 = ((digree1 - 32) * 5) / 9;

  console.log(digree2);
  document.getElementById("inCec").value = Math.trunc(digree2).toFixed(3);
}

function Area() {
  var side1 = parseInt(document.getElementById("side1").value);

  var side2 = parseInt(document.getElementById("side2").value);

  var side3 = parseInt(document.getElementById("side3").value);

  console.log(typeof side1);
  var s = (side1 + side2 + side3) / 2;

  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

  document.getElementById("displayresult").innerHTML = area;
}

function Febonaci() {
  const numvalue = Number(document.getElementById("numbers").value);
  console.log(numvalue);

  var sum;
  var num1 = 0;
  var num2 = 1;
  for (let i = 0; i < numvalue; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum);
  }
  document.getElementById("series").innerHTML = sum;
}

function sumbited() {
  let loginForm = document.getElementById("loginForm");
  console.log("count");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let heading = document.getElementById("postHeading");
    let descriptions = document.getElementById("postDescription");
    const headingval = heading.value;
    const desvalue = descriptions.value;
    // console.log(heading.value, "headingvalheadingval");
    if (heading.value == "" || descriptions.value == "") {
    } else {
    }
    heading.value = "";
    descriptions.value = "";
    document.getElementById("head").innerHTML = headingval;
    document.getElementById("desc").innerHTML = desvalue;
    console.log(headingval);
    console.log(desvalue);
  });
}

function addItem() {
  const inputbox = document.getElementById("inputbox");
  const items = document.getElementById("itemcontent");
  const category = document.getElementById("category");

  if (inputbox.value === "") {
  } else {
    let li = document.createElement("LI");
    li.innerHTML = `${inputbox.value} && ${category.value}.`;
    items.appendChild(li);

    let span = document.createElement("span");

    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";

  items.addEventListener(
    "click",
    function (e) {
      console.log("hshajd");
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
      }
    },
    false
  );
}
