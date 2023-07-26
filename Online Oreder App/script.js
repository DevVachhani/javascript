// let cartItems = [];
let count = 0;
let totalcount = 4;
var cartItems = [];
var prodsdata;
let unique = [];
var sumprice = 0;
// let numbers = 1;
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
      <div class="star star${prodsdata[index].id}" >
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
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
  
  <div class="pricespan"><span>Price:${value.price} $</span></div>
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
</div>`;
    // console.log(element);
    productsdata.insertAdjacentHTML("beforeend", Html);
    showrating(value.id);
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
  <div class="star star${value.id}" >
        <i class="fa fa-star" data-rating="1"></i>
        <i class="fa fa-star" data-rating="2"></i>
        <i class="fa fa-star" data-rating="3"></i>
        <i class="fa fa-star" data-rating="4"></i>
        <i class="fa fa-star" data-rating="5"></i>
      </div>
 <div class= "categorydata"><span>${value.category}</span></div>
  <div class="butndiv"> <button id="Addtocartbtn" onclick="addToCart(${value.id})">Add to Cart</button></div>
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

  closeCart();
}
