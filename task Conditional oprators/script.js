function Agecheck() {
  const AgeSelector = document.getElementById("Age").value;
  const status = document.getElementById("status");
  const greeting = document.getElementById("greeting");
  const checknum = document.getElementById("checknum");
  const marks = document.getElementById("marks");
  console.log(AgeSelector);

  if (AgeSelector === "") {
    alert("please input valid num");
  }
  if (+AgeSelector >= 21) {
    status.innerHTML = `User age is ${AgeSelector} so user is eligible to vote :) `;
  } else {
    status.innerHTML = `User age is ${AgeSelector} so user is not eligible to vote :( `;
  }
  if (AgeSelector % 2 == 0) {
    console.log("num is even");
    checknum.innerHTML = `${AgeSelector} is even number `;
  } else {
    checknum.innerHTML = `${AgeSelector} is odd number`;
    console.log("num is odd");
  }
  if (+AgeSelector > 35) {
    marks.innerHTML = `congrats !!! user is passed and user obtain ${AgeSelector} marks`;
  } else {
    marks.innerHTML = `sorry !! user is not passed and user obtain ${AgeSelector} marks `;
  }

  if (+AgeSelector === 35) {
    greeting.innerHTML = `Good Morning User You have a greate day :) `;
  } else {
    greeting.innerHTML = `oops Your Pin was wrong`;
  }
}

function numberchecker() {
  const enterdNumber = document.getElementById("enterdNumber").value;
  const category = document.getElementById("category");
  const numberstatus = document.getElementById("numberstatus");
  const ages = document.getElementById("agescheck");
  console.log(+enterdNumber);

  if (+enterdNumber < 0) {
    numberstatus.innerHTML = `${enterdNumber} is negative num`;
  } else if (+enterdNumber === 0) {
    numberstatus.innerHTML = `${enterdNumber} is zero value`;
  } else {
    numberstatus.innerHTML = ` ${enterdNumber} is positive num`;
  }

  if (enterdNumber < 35) {
    category.innerHTML = `better luck next time : User is failed in exam.`;
  } else if (enterdNumber > 35 && enterdNumber < 50) {
    category.innerHTML = `good !! try to get better marks..`;
  } else if (enterdNumber > 50 && enterdNumber < 80) {
    category.innerHTML = `better !!! you focus try hard to get full marks..`;
  } else if (enterdNumber <= 100) {
    category.innerHTML = `wow !!! your giving outstanding performance..`;
  } else {
    category.innerHTML = "please enterd a valid mark";
  }

  if (enterdNumber < 10) {
    ages.innerHTML = `your age is between 0 -10 years`;
  } else if (enterdNumber > 20 && enterdNumber < 50) {
    ages.innerHTML = `yor age is betwwn 20 - 50 years`;
  } else if (enterdNumber > 50 && enterdNumber < 80) {
    ages.innerHTML = `your age is between 50 - 80 years`;
  } else if (enterdNumber <= 100) {
    ages.innerHTML = `your age is between 80 - 100 years`;
  } else {
    ages.innerHTML = "your get so lucky your age is greater then  100 ";
  }
}

function Daychecker() {
  const days = Number(document.getElementById("enterdayNum").value);
  const dayDisplay = document.getElementById("dayDisplay");
  console.log(days);

  switch (days) {
    case 0:
      dayDisplay.innerHTML = "Sunday";
      break;
    case 1:
      dayDisplay.innerHTML = "Monday";
      break;
    case 2:
      dayDisplay.innerHTML = "Tuesday";
      break;
    case 3:
      dayDisplay.innerHTML = "Wenesday";
      break;
    case 4:
      dayDisplay.innerHTML = "Thrusday";
      break;
    case 5:
      dayDisplay.innerHTML = "Friday";
      break;
    case 6:
      dayDisplay.innerHTML = "saturday";
      break;
    default:
      dayDisplay.innerHTML = "please eneterd num between 0 to 6";
    //   break;
  }
}

function carSelctor() {
  const carname = document.getElementById("cars").value;
  console.log(carname);
  const carprice = document.getElementById("carprice");

  switch (carname) {
    case "volvo":
      carprice.innerHTML = `${carname} is 40 lakh rs`;
      break;
    case "maruti":
      carprice.innerHTML = `${carname} is 20 lakh rs`;
      break;
    case "hundye":
      carprice.innerHTML = `${carname} is 30 lakh rs`;
      break;
    case "audi":
      carprice.innerHTML = `${carname} is 50 lakh rs`;
      break;
  }
}

function calc() {
  const number1 = Number(document.getElementById("num1").value);
  const number2 = Number(document.getElementById("num2").value);
  const oprator = document.getElementById("oprator").value;
  const ans = document.getElementById("ans");
  console.log(number1, number2, oprator);
  let number;
  switch (oprator) {
    case "+":
      number = number1 + number2;
      ans.innerHTML = number;
      break;
    case "-":
      number = number1 - number2;
      ans.innerHTML = number;
      break;
    case "*":
      number = number1 * number2;
      ans.innerHTML = number;
      break;
    case "/":
      number = number1 / number2;
      ans.innerHTML = number;

    default:
      ans.innerHTML = "please enter a valid data.";
  }
}

function ternaryopration() {
  const numbers = Number(document.getElementById("ternary").value);
  const ternaryInput = document.getElementById("ternaryInput");
  const cbillfeild = document.getElementById("textofCbill");
  console.log(numbers);

  numbers % 2 == 0
    ? (ternaryInput.innerHTML = `${numbers} is even.`)
    : (ternaryInput.innerHTML = `${numbers} is odd.`);

  const usersCbill =
    numbers > 70
      ? "Exallent Cbiil Score. user get loan easily"
      : numbers > 50
      ? "Average Cbill Score get try to approve loan"
      : "Lower cbill score and get not approved for loan";

  console.log(usersCbill);
  cbillfeild.innerHTML = usersCbill;
}
