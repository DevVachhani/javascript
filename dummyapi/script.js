"use strict";
let count = 0;
let totalcount = 5;
let finaldata = [];
let searchedValue;

let users = [];
async function logBlog(e) {
  // e.preventDefault();
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    const blogsitems = data.posts;
    // let blogs = document.querySelector(".bitems");

    finaldata = blogsitems;

    loadItems();
  } catch (error) {
    console.log(error);
  }
}

logBlog();

function loadItems(e) {
  // e.preventDefault();
  let blogs = document.querySelector(".bitems");
  if (count <= finaldata.length) {
    for (let index = count; index <= totalcount; index++) {
      const newDiv = `<div class="blog-items">
      <div class="blog-title">
        <span id="blog-id">${finaldata[index].id}</span>
        <h3 id="blogheading">${finaldata[index].title}</h3>
        <p id="blog-description">
         ${finaldata[index].body}
        </p>
        <span id="tags"> tags: ${finaldata[index].tags}</span><br/>
        <span id="reaction"><i class="fa fa-heart" style="font-size:18px;color:red"></i>  ${finaldata[index].reactions}</span>
      </div>
    </div>`;
      blogs.insertAdjacentHTML("beforeend", newDiv);
      count++;
    }
    totalcount += 6;
  }
}

function handleSearch(e) {
  searchedValue = e.target.value.trim().toLowerCase();
  console.log(searchedValue);
}

function searchtheblog() {
  if (searchedValue) {
    const users = finaldata.filter((item) => {
      if (item.title.toLowerCase().includes(searchedValue)) {
        return item;
      }
    });
    let blogs = document.querySelector(".bitems");
    const boxes = document.querySelectorAll(".blog-items");
    console.log(blogs);
    if (users.length) {
      boxes.forEach((box) => {
        box.remove();
      });

      for (let index = 0; index < users.length; index++) {
        const newDiv = `<div class="blog-items">
      <div class="blog-title">
        <span id="blog-id">${users[index].id}</span>
        <h3 id="blogheading">${users[index].title}</h3>
        <p id="blog-description">
         ${users[index].body}
        </p>
        <span id="tags"> tags: ${users[index].tags}</span><br/>
        <span id="reaction"><i class="fa fa-heart" style="font-size:18px;color:red"></i>${users[index].reactions}</span>
      </div>
    </div>`;
        blogs.insertAdjacentHTML("beforeend", newDiv);
      }
    }
  }
}

function displayloveblogs() {
  const users = finaldata.filter((item) => {
    if (item.tags.includes("love")) {
      return item;
    }
  });
  let blogs = document.querySelector(".bitems");
  const boxes = document.querySelectorAll(".blog-items");
  console.log(blogs);
  if (users.length) {
    boxes.forEach((box) => {
      box.remove();
    });
    displaydata();
  }
  function displaydata() {
    for (let index = 0; index < users.length; index++) {
      const newDiv = `<div class="blog-items">
  <div class="blog-title">
    <span id="blog-id">${users[index].id}</span>
    <h3 id="blogheading">${users[index].title}</h3>
    <p id="blog-description">
     ${users[index].body}
    </p>
    <span id="tags"> tags: ${users[index].tags}</span><br/>
    <span id="reaction"><i class="fa fa-heart" style="font-size:18px;color:red"></i>${users[index].reactions}</span>
  </div>
  </div>`;
      blogs.insertAdjacentHTML("beforeend", newDiv);
    }
  }
}

function displaycrimeblogs() {
  const users = finaldata.filter((item) => {
    if (item.tags.includes("crime")) {
      return item;
    }
  });
  let blogs = document.querySelector(".bitems");
  const boxes = document.querySelectorAll(".blog-items");
  console.log(blogs);
  if (users.length) {
    boxes.forEach((box) => {
      box.remove();
    });
    displaydata();
  }
  function displaydata() {
    for (let index = 0; index < users.length; index++) {
      const newDiv = `<div class="blog-items">
  <div class="blog-title">
    <span id="blog-id">${users[index].id}</span>
    <h3 id="blogheading">${users[index].title}</h3>
    <p id="blog-description">
     ${users[index].body}
    </p>
    <span id="tags"> tags: ${users[index].tags}</span><br/>
    <span id="reaction"><i class="fa fa-heart" style="font-size:18px;color:red"></i>${users[index].reactions}</span>
  </div>
  </div>`;
      blogs.insertAdjacentHTML("beforeend", newDiv);
    }
  }
}
