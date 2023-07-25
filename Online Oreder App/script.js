// let cartItems = [];
let count = 0;
let totalcount = 0;
var cartItems = [];
var prodsdata;

var sumprice = 0;

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
}
fetchproducts();

function loaditems() {
  const productsdata = document.querySelector(".featureP");
  if (count <= prodsdata.length) {
    for (let index = count; index <= totalcount; index++) {
      // prodsdata.forEach((value) => {
      const Html = `<div class="productsItems">
        <div class="idspan"><span>${prodsdata[index].id}</span></div>
      <div class="imgdiv"><img src="${prodsdata[index].image}" alt="fetcherp1" /></div>
      <div class="paragrapgdiv"><p>${prodsdata[index].title}</p></div>
      
      <div class="pricespan"><span>Price:${prodsdata[index].price} $</span></div>
      <div class="star">
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
     <div class= "categorydata"><span>${prodsdata[index].category}</span></div>
      <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${prodsdata[index].id})">Add to Cart</button></div>
    </div>`;
      // console.log(element);
      productsdata.insertAdjacentHTML("beforeend", Html);
      // });
      count++;
    }
  }
  totalcount += 5;
  // const stars = document.querySelector(".star i");
  // console.log(stars);
  showrating();
  // stars.forEach((star) => {});
}

function showrating() {
  const stars = document.querySelectorAll(".star i");
  console.log(stars);

  const res = prodsdata.find((items) => {
    return items;
  });
  const rates = +res.rating.rate.toFixed();
  console.log(rates);

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      // console.log(index1);
      stars.forEach((star, index2) => {
        console.log(index2);
        rates === index2
          ? star.classList.add("active")
          : star.classList.remove("active");
      });
    });
  });
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

  res.id;
  sumprice += res.price;
  const sumpricetotal = Number(sumprice.toFixed());

  // console.log(sumpricetotal);
  const totalsumprice = document.getElementById("sumtotsal");
  totalsumprice.innerHTML = `Total Price :${sumpricetotal} $ `;
  listcartdata.insertAdjacentHTML("beforeend", cartdata);

  cartItems.push(res);
  // console.log(cartItems);
  // console.log(res);
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
  });
  // console.log(fiterddata);
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
  });
}

function checkout() {
  alert("Thank you for your purchase!");
  // const listcartdata = document.getElementById("cart-items");
  // listcartdata.remove();

  const totalsumprice = document.getElementById("sumtotsal");
  totalsumprice.innerHTML = `Total Price :0 $ `;
  while (cartItems.length > 0) {
    cartItems.pop();
  }

  console.log(cartItems);

  // cartItems = [];

  const coupenValue = document.getElementById("coupenApplied");
  coupenValue.value = "";

  closeCart();
}
