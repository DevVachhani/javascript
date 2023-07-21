// let cartItems = [];
let count = 0;

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
    // console.log(prodsdata[0]);
    prodsdata.forEach((value) => {
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
  } catch (error) {
    console.log(error);
  }
}

fetchproducts();

// function loadiTems(index , array)

function addToCart(productId) {
  // cartItems.push(product);
  console.log(productId);
  const res = prodsdata.find((item) => {
    return item.id === productId;
  });

  const listcartdata = document.getElementById("cart-items");

  const cartdata = `<div class="cartitems">
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

  console.log(sumpricetotal);
  const totalsumprice = document.getElementById("sumtotsal");
  totalsumprice.innerHTML = `Total Price :${sumpricetotal} $ `;
  listcartdata.insertAdjacentHTML("beforeend", cartdata);

  cartItems.push(res);
  console.log(cartItems);
  console.log(res);
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

function checkout() {
  alert("Thank you for your purchase!");
  cartItems = [];
  closeCart();
}

function IncreaseNum(id) {
  const res = prodsdata.find((item) => {
    return item.id === id;
  });

  console.log(res);
  const datapriceValue = document.getElementById(`priceitem${res.id}`);
  console.log(datapriceValue);
  const totalsumprice = document.getElementById("sumtotsal");
  // sumprice = res.price + res.price;

  const incremnet = document.getElementById(`${id}`);

  let num = incremnet.value;
  num = parseInt(num) + 1;
  console.log(num);
  const dounbleprice = res.price * num;
  console.log(dounbleprice);

  sumprice += res.price;
  const totalpricevalue = sumprice.toFixed(2);
  console.log(totalpricevalue);
  datapriceValue.innerHTML = `${dounbleprice} $`;
  // inputnbincreased.value = currentNum + 1;

  console.log(cartItems);

  console.log(num);
  incremnet.value = num;

  totalsumprice.innerHTML = `Total Price :${totalpricevalue} $ `;
  updatecart();
}

function decreaseNum(id) {
  console.log(id);
  const decrement = document.getElementById(`${id}`);
  const res = prodsdata.find((item) => {
    return item.id === id;
  });
  const datapriceValue = document.getElementById(`priceitem${res.id}`);

  sumprice = sumprice - res.price;
  const totalprice = sumprice.toFixed(2);
  console.log(totalprice);
  datapriceValue.innerHTML = `${totalprice} $`;

  console.log(cartItems);
  let num = decrement.value;
  // console.log(num);
  num = parseInt(num) - 1;
  console.log(num);
  decrement.value = num;

  const totalsumprice = document.getElementById("sumtotsal");
  console.log(totalsumprice);
  totalsumprice.innerHTML = `Total price: ${totalprice} $`;
  if (num <= 0) {
    const removedata = cartItems.shift();
    // console.log(removedata);
    console.log(cartItems);
    //

    var list = document.getElementById("cart-items");

    list.removeChild(list.firstElementChild);
  }
  updatecart();
}
