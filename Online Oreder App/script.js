// let cartItems = [];
let count = 0;
let totalcount = 4;
var cartItems = [];
var prodsdata;
let unique = [];
var sumprice = 0;
var logedInuser;
// let numbers = 1;
let slideIndex = 1;
let loginSuccessfull = false;
let clickCheckout = false;
let showslide = true;

let price;
function createHtml(data) {
  const Html = `<div class="productsItems">
        <div class="idspan"><span>${data.id}</span></div>
      <div class="imgdiv"><img src="${data.image}" alt="fetcherp1" /></div>
      <div class="paragrapgdiv"><p>${data.title}</p></div>
      
      <div class="pricespan"><span>Price:${data.price} $ 
          <span class="orignalPrice">${(data.price + 20).toFixed(
            2
          )}$</span></span></div>
      <div class="star star${data.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
     <div class= "categorydata"><span>${data.category}</span></div>
     
      <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
        data.id
      })">Add to Cart</button></div>
    </div>`;
  return Html;
}
async function fetchproducts() {
  // e.preventDefault();
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // const productsdata = document.querySelector(".featureP");
    // console.log(productsdata);
    console.log(data);
    prodsdata = data;
    // loaditems();
    // console.log(prodsdata.length);
    if (!clickCheckout) {
      loaditems();
    }
    // showrating();
  } catch (error) {
    // console.log(prodsdata[0]);
    console.log(error);
  }
  showSlides(slideIndex);
  clickCheckout = true;
}

fetchproducts();

function loaditems() {
  const productsdata = document.querySelector(".featureP");
  if (count <= prodsdata.length) {
    for (let index = count; index <= totalcount; index++) {
      // prodsdata.forEach((value) => {
      const Html = createHtml(prodsdata[index]);

      // console.log(element);
      productsdata.insertAdjacentHTML("beforeend", Html);
      // });
      count++;
      showrating(prodsdata[index].id);
    }
  }
  totalcount += 5;
}

function showrating(id) {
  // console.log(prodsdata);
  const res = prodsdata.find((items) => {
    return items.id === id;
  });
  const rates = +res.rating.rate.toFixed();
  // console.log(rates);
  const stars = document.querySelectorAll(`.star${id} i`);
  // console.log(stars);
  let rateCount = 0;
  while (rateCount < 5) {
    if (rateCount < rates) {
      stars[rateCount].classList.add("active");
    } else {
      stars[rateCount].classList.remove("active");
    }
    rateCount++;
  }
}

// function loadiTems(index , array)

function addToCart(productId) {
  const cartbtnview = document.querySelector(".cartbtn");
  cartbtnview.scrollIntoView();

  // cartItems.push(product);
  console.log(productId);
  const res = prodsdata.find((item) => {
    return item.id === productId;
  });
  // console.log(cartItems);
  const sameCartItem = cartItems.find((item) => {
    return item.id === productId;
  });
  if (sameCartItem) {
    IncreaseNum(productId);
    return;
  }

  // console.log(uniqueArray);

  const listcartdata = document.getElementById("cart-items");

  // console.log(child2listdata);
  const cartdata = `<div class="cartitems" id='cartitems${res.id}'>
  <div class="Items">
    <div class="itemsDes">
      <img
        src="${res.image}"
        alt=""
      />
      <p>${res.title}</p>
    </div>
    <div class="quantity">
      <button
        class="plus-btn"
        onclick="IncreaseNum(${res.id})"
        type="button"
        name="button"
      >
        <i class="fa fa-plus" style="font-size: 24px"></i>
      </button>
      <input id="${res.id}" type="text" name="name" value="1" />
      <button
        class="minus-btn"
        type="button"
        onclick="decreaseNum(${res.id})"
        name="button"
      >
        <i class="fa fa-minus" style="font-size: 24px"></i>
      </button>
    </div>
    <div>
      <span id="priceitem${res.id}">${res.price} $</span>
    </div>
   <span style="margin-top: -80px;"  id = "removeitem${res.id}"><i class="fa fa-close"></i></span>
  </div>
</div>`;
  listcartdata.insertAdjacentHTML("beforeend", cartdata);
  const closeremove = document.getElementById(`removeitem${res.id}`);
  console.log(closeremove);
  closeremove.addEventListener("click", (item) => {
    console.log("hello");

    const list = document.getElementById(`cartitems${res.id}`);
    list.remove(item);
    const priceremove = document.getElementById(`priceitem${res.id}`);
    // priceremove.textContent =
  });

  // res.id;

  sumprice += res.price;
  const sumpricetotal = Number(sumprice.toFixed());

  // console.log(sumpricetotal);
  const totalsumprice = document.getElementById("sumtotsal");
  console.log(totalsumprice);
  totalsumprice.innerHTML = `Total Price :${sumpricetotal} $ `;

  cartItems.push(res);

  updatecart();
}

function updatecart() {
  const proddata = document.getElementById("prodnum");

  proddata.innerHTML = cartItems.length;
}

function openCart() {
  const cart = document.getElementById("cart");
  cart.classList.add("open");

  const proddata = document.getElementById("prodnum");
  proddata.style.display = "none";
}

function closeCart() {
  const cart = document.getElementById("cart");
  cart.classList.remove("open");

  const proddata = document.getElementById("prodnum");
  proddata.style.display = "block";
  updatecart();
}

function IncreaseNum(id) {
  const res = prodsdata.find((item) => {
    return item.id === id;
  });

  // console.log(res);
  const datapriceValue = document.getElementById(`priceitem${res.id}`);
  // console.log(datapriceValue);
  const totalsumprice = document.getElementById("sumtotsal");
  // sumprice = res.price + res.price;

  const incremnet = document.getElementById(`${id}`);

  let num = incremnet.value;
  num = parseInt(num) + 1;
  console.log(num);
  const dounbleprice = res.price * num;
  // console.log(dounbleprice);

  sumprice += res.price;
  const totalpricevalue = sumprice.toFixed(2);
  // console.log(totalpricevalue);
  datapriceValue.innerHTML = `${dounbleprice} $`;
  // inputnbincreased.value = currentNum + 1;

  console.log(cartItems);

  // console.log(num);
  incremnet.value = num;

  totalsumprice.innerHTML = `Total Price :${totalpricevalue} $ `;
  updatecart();
}

function decreaseNum(id) {
  // console.log(id);
  const decrement = document.getElementById(`${id}`);
  let num = decrement.value;
  const res = prodsdata.find((item) => {
    return item.id === id;
  });

  const datapriceValue = document.getElementById(`priceitem${res.id}`);
  const itemValue = (num - 1) * res.price;
  sumprice = sumprice - res.price;
  const itemTotalPrice = itemValue.toFixed(2);
  const totalprice = sumprice.toFixed(2);
  // console.log(totalprice);
  datapriceValue.innerHTML = `${itemTotalPrice} $`;

  // console.log(cartItems);
  // console.log(num);
  num = parseInt(num) - 1;
  // console.log(num);
  decrement.value = num;

  const totalsumprice = document.getElementById("sumtotsal");
  // console.log(totalsumprice);
  totalsumprice.innerHTML = `Total price: ${totalprice} $`;
  if (num === 0) {
    const removedata = cartItems.shift();
    // console.log(removedata);
    console.log(cartItems);
    //

    var list = document.getElementById(`cartitems${id}`);

    list.remove();
  }
  updatecart();
}

function submitvalue() {
  const serachItem = document.getElementById("Searchvalue").value;

  // console.log(serachItem);
  // console.log(prodsdata);

  const fiterddata = prodsdata.filter((item) => {
    if (item.category.includes(serachItem)) {
      return item;
    }
  });
  const productsdata = document.querySelector(".featureP");
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
}

function seeElectronicsProduct() {
  console.log(prodsdata);
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.category.includes("electronics")) {
      return item;
    }
  });
  // console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
  // console.log(fiterddata);
}

function seeJwelleryProduct() {
  // console.log(prodsdata);
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.category.includes("jewelery")) {
      return item;
    }
  });
  // console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
  // console.log(fiterddata);
}

function underprice99() {
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.price <= 99) {
      return item;
    }
  });
  console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
}
function underprice399() {
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.price <= 399 && item.price >= 99) {
      return item;
    }
  });
  console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
}
function underprice799() {
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.price <= 799 && item.price >= 399) {
      return item;
    }
  });
  console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
}

function seeAllProduct() {
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    return item;
  });
  console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = createHtml(value);
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
}

function applied() {
  const coupenValue = document.getElementById("coupenApplied").value;
  console.log(coupenValue);

  if (coupenValue === "COUPEN") {
    // console.log(sumprice);
    alert(`after applied discount total price ${sumprice * (0.9).toFixed(2)}`);
    const totalsumprice = document.getElementById("sumtotsal");
    // console.log(totalsumprice);
    totalsumprice.innerHTML = `Total price: ${sumprice * (0.9).toFixed(2)} $`;
  }
}

function login() {
  const loginBtn = document.getElementById("signIn");
  const footer = document.querySelector(".footer");

  const blurContainer = document.querySelector(".blur-container");
  const loginform = document.querySelector(".form-sec");
  const newUserlogin = document.querySelector(".newusertoDownload");
  const cartbtn = document.getElementById("cart-button");
  // const formContainer = document.querySelector(".form-container");
  let signup = document.querySelector(".logout");
  let login = document.querySelector(".login");
  let slider = document.querySelector(".slider");
  let formSection = document.querySelector(".form-section");

  loginBtn.addEventListener("click", () => {
    blurContainer.style.display = "none";
    loginform.style.display = "flex";
    cartbtn.style.display = "none";
    footer.style.display = "none";
  });

  signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
  });

  login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
  });

  newUserlogin.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
  });
  // logoutBtn.style.display = "none";
  loginform.addEventListener("click", (event) => {
    // console.log(hello);
    if (event.target === loginform) {
      loginform.style.display = "none";
      blurContainer.style.display = "block";
      cartbtn.style.display = "block";
      footer.style.display = "block";
    }
  });

  return logedInuser !== null;
}

function logout() {
  const loginBtn = document.getElementById("signIn");
  const Useerwelocme = document.querySelector(".userWelcome");
  const logoutBtn = document.getElementById("signOut");

  logoutBtn.addEventListener("click", () => {
    alert("Are You Sure!!!!!");
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
    Useerwelocme.style.display = "none";
  });
  localStorage.clear();
  updatecart();
  // return logedInuser === null;
}

function logintotheWebsite() {
  const footer = document.querySelector(".footer");

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const blurContainer = document.querySelector(".blur-container");
  const loginform = document.querySelector(".form-sec");
  const Useerwelocme = document.querySelector(".userWelcome");
  const signIn = document.getElementById("signIn");
  const cartbtn = document.getElementById("cart-button");
  const signOut = document.getElementById("signOut");
  // console.log(username, password);
  const loginUser = {
    username: username.value,
    password: password.value,
  };
  const loginFail = false;
  Object.keys(loginUser).map((user) => {
    if (!loginUser[user]) {
      if (user === "username") {
        loginFail = true;
        showError(username, "User Name is not Valid.");
      } else {
        loginFail = true;
        showError(password, "Password is Requried.");
      }
    }
  });

  if (loginFail) {
    return;
  }
  const signUpUsers = [];
  const url =
    "https://e-commerce-sign-up-43eb1-default-rtdb.firebaseio.com/sign_up.json";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application / json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).map((userKey) => signUpUsers.push(data[userKey]));
      const userObject = {
        user_email: username.value,
        user_password: password.value,
      };
      for (let index = 0; index < signUpUsers.length; index++) {
        if (
          signUpUsers[index].user_email === userObject.user_email &&
          signUpUsers[index].user_password === userObject.user_password
        ) {
          loginSuccessfull = true;
          break;
        } else {
          loginSuccessfull = false;
        }
      }
      if (loginSuccessfull) {
        blurContainer.style.display = "block";
        loginform.style.display = "none";
        signIn.style.display = "none";
        signOut.style.display = "block";
        footer.style.display = "block";
        Useerwelocme.style.display = "block";
        cartbtn.style.display = "block";
      } else {
        alert("Login Failed.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

let newUsers = [];

function validation() {
  const password = document.getElementById("userPasswordvalue");
  const username = document.getElementById("userNamevalue");
  const UserEmail = document.getElementById("userEmailvalue");
  const confirmpassword = document.getElementById("confirmPasswordvalue");
  if (username.value === "") {
    showError(username, "User Name is Requried.");
    // console.log("hello");
  } else {
    showSuccess(username);
  }

  if (UserEmail.value === "") {
    showError(UserEmail, "Enter a valid Email-id.");
  } else {
    showSuccess(UserEmail);
  }

  if (password.value === "") {
    showError(password, "Password Must be Requried.");
  } else {
    showSuccess(password);
  }

  if (confirmpassword.value !== password.value) {
    showError(confirmpassword, "Password not be same.");
  } else if (confirmpassword.value === "") {
    showError(confirmpassword, "Password not be same.");
  } else {
    showSuccess(confirmpassword);
  }
}

function singupformdata(e) {
  e.preventDefault();

  const password = document.getElementById("userPasswordvalue");
  const username = document.getElementById("userNamevalue");
  const UserEmail = document.getElementById("userEmailvalue");
  const confirmpassword = document.getElementById("confirmPasswordvalue");

  if (
    username.value !== "" &&
    password.value === confirmpassword.value &&
    UserEmail.value !== ""
  ) {
    validation();
    console.log("ok");

    const userObject = {
      user_name: username.value,
      user_email: UserEmail.value,
      user_password: password.value,
    };

    const url =
      "https://e-commerce-sign-up-43eb1-default-rtdb.firebaseio.com/sign_up.json";
    if (login()) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(userObject),
        headers: {
          "Content-Type": "application / json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    console.log(userObject);
    alert("You have Succesfully Register Please Login..");
  } else {
    validation();
  }

  // console.log(newUsers);
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  // console.log(formControl);
  const small = formControl.querySelector("small");
  small.style.display = "block";
  // console.log(small);
  small.innerHTML = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerHTML = "";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  setTimeout(() => {
    showSlides(slideIndex + 1);
  }, 3000); // Change image every 2 seconds
}

// async function selfCall() {
//   const response = await fetch(
//     "https://e-commerce-app-8cd02-default-rtdb.firebaseio.com/product.json"
//   );
//   const data = await response.json();
//   console.log(data);
// }
// selfCall();

function checkout(event) {
  // event.preventDefault();

  const checkout = document.querySelector(".checkoutdiv");
  const footer = document.querySelector(".footer");
  const signOut = document.getElementById("signOut");
  const blurContainer = document.querySelector(".blur-container");
  const loginform = document.querySelector(".form-sec");
  const signIn = document.getElementById("signIn");
  // let loginSuccessfull = false;
  clickCheckout = true;
  console.log(cartItems);
  console.log(signOut);
  // loaditems();
  // showSlides();
  if (loginSuccessfull) {
    console.log(cartItems);
    signOut.style.display = "block";
    checkout.style.display = "block";
    blurContainer.style.display = "none";
    footer.style.display = "none";
    console.log(signOut);
    closeCart();
    // signIn.style.display = "none";
    showsummerydata();
    // fetchproducts(e);
  } else {
    alert("You have to login First..");
    blurContainer.style.display = "none";
    loginform.style.display = "flex";
    signIn.style.display = "none";
    footer.style.display = "none";
    closeCart();
  }
}

function saveFormdeatils(event) {
  event.preventDefault();
  const formname = document.getElementById("formusername");
  const formaddres = document.getElementById("formuseraddress");
  const formmobilenum = document.getElementById("mobile-num");
  const formcity = document.getElementById("city");
  const formpincode = document.getElementById("pincode");

  const formdata = {
    us_name: formname.value,
    us_address: formaddres.value,
    us_mnumber: formmobilenum.value,
    us_city: formcity.value,
    us_pincode: formpincode.value,
  };
  const url =
    "https://e-commerce-sign-up-43eb1-default-rtdb.firebaseio.com/user_adress.json";
  if (login()) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application / json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // console.log(formdata);
}

function finaldatasubmission(event) {
  event.preventDefault();

  const cardnum = document.getElementById("cardNumber");
  const MM = document.getElementById("monthcreditcard");
  const YY = document.getElementById("yearcreaditcard");
  const cvv = document.getElementById("cvvnum");
  const thankyou = document.querySelector(".thnak-content");
  const carddata = {
    cardnum: cardnum.value,
    cardMM: MM.value,
    cardYY: YY.value,
    cardCvv: cvv.value,
  };

  if (login()) {
    fetch(
      "https://e-commerce-sign-up-43eb1-default-rtdb.firebaseio.com/credit_Card.json",
      {
        method: "POST",
        body: JSON.stringify(carddata),
        headers: {
          "Content-Type": "application / json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  thankyou.style.display = "block";

  // console.log(carddata);
}

function showsummerydata() {
  console.log(cartItems);

  const summerysumtotsal = document.getElementById("sumsumrry");
  const listcartdata = document.getElementById("order-Items");
  console.log(listcartdata);
  for (let index = 0; index < cartItems.length; index++) {
    const cartdata = `<div class="orderItems" id='orderItems${cartItems[index].id}'>
    <div class="Items">
      <div class="itemsDes">
        <img
          src="${cartItems[index].image}"
          alt=""
        />
        <p>${cartItems[index].title}</p>
      </div>
      <div class="quantity">
        <span>Qunatity :</span>
        <input id="${cartItems[index].id}" type="text" name="name" value="1" />
       
      </div>
      <div>
        <span id="priceitem${cartItems[index].id}">${cartItems[index].price} $</span>
      
      </div>
    </div>
  </div>`;
    listcartdata.insertAdjacentHTML("beforeend", cartdata);
  }

  summerysumtotsal.innerHTML = `TOTAL PRICE : ${sumprice + 20}`;
}

function showHideDiv(radio) {
  const contentDiv = document.querySelector(".credit-card-fields");

  // Check which radio button is selected
  if (radio.value === "online") {
    contentDiv.style.display = "flex"; // Show the div
  } else {
    contentDiv.style.display = "none"; // Hide the div
  }
}
