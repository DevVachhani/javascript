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

let price;

async function fetchproducts() {
  // e.preventDefault();
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const productsdata = document.querySelector(".featureP");
    // console.log(productsdata);
    console.log(data);
    prodsdata = data;
    // loaditems();
    // console.log(prodsdata.length);
    loaditems();
    // showrating();
  } catch (error) {
    // console.log(prodsdata[0]);
    console.log(error);
  }
  // showSlides(slideIndex);
  showSlides(slideIndex);
}

fetchproducts();

function loaditems() {
  const productsdata = document.querySelector(".featureP");
  if (count <= prodsdata.length) {
    for (let index = count; index <= totalcount; index++) {
      // prodsdata.forEach((value) => {
      const Html = `<div class="productsItems">
        <div class="idspan"><span>${prodsdata[index].id}</span></div>
      <div class="imgdiv"><img src="${
        prodsdata[index].image
      }" alt="fetcherp1" /></div>
      <div class="paragrapgdiv"><p>${prodsdata[index].title}</p></div>
      
      <div class="pricespan"><span>Price:${prodsdata[index].price} $ 
          <span class="orignalPrice">${(prodsdata[index].price + 20).toFixed(
            2
          )}$</span></span></div>
      <div class="star star${prodsdata[index].id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
     <div class= "categorydata"><span>${prodsdata[index].category}</span></div>
     
      <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
        prodsdata[index].id
      })">Add to Cart</button></div>
    </div>`;

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
  // console.log(productId);
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
  </div>
</div>`;
  listcartdata.insertAdjacentHTML("beforeend", cartdata);
  res.id;
  sumprice += res.price;
  const sumpricetotal = Number(sumprice.toFixed());

  // console.log(sumpricetotal);
  const totalsumprice = document.getElementById("sumtotsal");
  totalsumprice.innerHTML = `Total Price :${sumpricetotal} $ `;

  cartItems.push(res);
  // const unique = [...new Set(cartItems)];
  // console.log(unique);
  // console.log(cartItems);

  // let uniqueArray = cartItems.reduce((acc, current) => {
  //   const existingItem = acc.find((item) => item.id === current.id);
  //   console.log(existingItem);
  //   if (existingItem) {
  //     // If the item already exists, update its quantity
  //     console.log("same");
  //     // const inputidvalye = document.getElementById(`${res.id}`);
  //     // inputidvalye.value = numbers + 1;

  //     const listcartdata = document.getElementById("cart-items");
  //     console.log(listcartdata);
  //     var list = document.getElementById(`cartitems${res.id}`);
  //     console.log(list);
  //     // list.remove();
  //     // listcartdata.replaceWith();

  //     // existingItem.quantity += current.quantity;
  //   } else {
  //     // If the item does not exist, add it to the accumulator array
  //     acc.push(current);
  //     console.log("notsame");
  //   }

  //   return acc;
  // }, []);

  updatecart();
  // console.log(cartItems);
  // console.log(product);
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $<span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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
  console.log(fiterddata);
  while (productsdata.firstChild) {
    productsdata.removeChild(productsdata.lastChild);
  }
  fiterddata.forEach((value) => {
    // console.log(value);
    // const valueObj = JSON.stringify(value);
    // console.log(valueObj);
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $ <span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
  });
  console.log(fiterddata);
}
function seeJwelleryProduct() {
  // console.log(prodsdata);
  const productsdata = document.querySelector(".featureP");
  const fiterddata = prodsdata.filter((item) => {
    if (item.category.includes("jewelery")) {
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $ <span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $<span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $ <span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $ <span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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
    const Html = `<div class="productsItems">
    <div class="idspan"><span>${value.id}</span></div>
  <div class="imgdiv"><img src="${value.image}" alt="fetcherp1" /></div>
  <div class="paragrapgdiv"><p>${value.title}</p></div>
  
  <div class="pricespan"><span>Price:${
    value.price
  } $ <span class="orignalPrice">${(value.price + 20).toFixed(
      2
    )}$</span></span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${
    value.id
  })">Add to Cart</button></div>
</div>`;
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

function checkout() {
  const getLogin = JSON.parse(localStorage.getItem("loginCredential"));

  console.log(getLogin);
  if (!getLogin) {
    alert("You have to Login First..");
    closeCart();
    return;
  }
  alert("Thank you for your purchase!");
  const listcartdata = document.getElementById("cart-items");
  while (listcartdata.firstChild) {
    listcartdata.lastChild.remove();
  }

  const totalsumprice = document.getElementById("sumtotsal");
  sumprice = 0;
  totalsumprice.innerHTML = `Total Price :0 $ `;
  // while (cartItems.length > 0) {
  //   cartItems.pop();
  // }
  cartItems = [];

  console.log(cartItems);

  // cartItems = [];

  const coupenValue = document.getElementById("coupenApplied");
  coupenValue.value = "";

  // console.log("when logied in");
  // } else {
  //   alert("You have to Login First..");
  //   cartItems = [];
  //   updatecart();
  // }
  closeCart();
}

function login() {
  const loginBtn = document.getElementById("signIn");

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

function formsubmit() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const blurContainer = document.querySelector(".blur-container");
  const loginform = document.querySelector(".form-sec");
  const Useerwelocme = document.querySelector(".userWelcome");
  const signIn = document.getElementById("signIn");
  const cartbtn = document.getElementById("cart-button");
  const signOut = document.getElementById("signOut");
  // console.log(username, password);

  if (username.value === "admin" && password.value === "123") {
    localStorage.setItem(
      "loginCredential",
      JSON.stringify({ user: "admin", password: "123" })
    );
    // alert("Login successful!");
    blurContainer.style.display = "block";
    loginform.style.display = "none";
    signIn.style.display = "none";
    signOut.style.display = "block";
    Useerwelocme.style.display = "block";
    cartbtn.style.display = "block";
  } else {
    if (username.value === "") {
      showError(username, "User Name is Requried.");
    } else {
      showSuccess(username);
    }
    if (password.value === "" && password.value !== "123") {
      showError(password, "Password is Requried.");
    }
  }
}

let newUsers = [];
function signUpdataForm() {
  const password = document.getElementById("userPasswordvalue");
  const username = document.getElementById("userNamevalue");
  const UserEmail = document.getElementById("userEmailvalue");
  const confirmpassword = document.getElementById("confirmPasswordvalue");

  // console.log(name, Email, password, confirmpassword);

  // if (password.value !== confirmpassword.value) {
  //   password.setCustomValidity("Please Chek ypur password");
  //   // alert("Please check Your Password");
  //   return;
  // } else {
  // const addUser = (e) => {
  //   let newUser = {
  //     id: 1,
  //     name: document.getElementById("userNamevalue").value,
  //     email: document.getElementById("userEmailvalue").value,
  //     // password: password.value,
  //   };
  //   newUsers.push(newUser);

  if (username.value === "") {
    showError(username, "User Name is Requried.");
    console.log("hello");
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

  // console.log(newUsers);
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  console.log(formControl);
  const small = formControl.querySelector("small");
  small.style.display = "block";
  console.log(small);
  small.innerHTML = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerHTML = "";
}

function showSlides(n) {
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideIndex++;
  setTimeout(() => {
    showSlides(slideIndex + 1);
  }, 3000); // Change image every 2 seconds
}
