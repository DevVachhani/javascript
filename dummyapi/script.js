"use strict";

async function logBlog() {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    const blogsitems = data.posts;
    console.log(blogsitems);
    let blogs = document.querySelector(".bitems");
    let bloghead = document.getElementById("blogheading");
    bloghead.innerHTML = blogsitems.title;
    let blogbody = document.getElementById("blog-description");
    blogbody.innerHTML = blogsitems.body;
    let blognum = document.getElementById("blognum");
    console.log(blognum);

    blogsitems.forEach((element) => {
      const newDiv = `<div class="blog-items">
      <div class="blog-title">
        <span id="blog-id">${blognum}</span>
        <h3 id="blogheading">${bloghead}</h3>
        <p id="blog-description">
         ${blogbody}
        </p>
      </div>
    </div>`;
      blogs.insertAdjacentHTML("beforeend", newDiv);
      // console.log(blogs);
    });
  } catch (error) {
    console.log(error);
  }
}

logBlog();

function saveFormData() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  localStorage.setItem("name", name);
  localStorage.setItem("description", description);

  alert("Form data saved successfully!");
}

function getFOrmData() {
  const namehed = document.getElementById("nameTitle");
  let deshead = document.getElementById("nameDescription");

  var name = localStorage.getItem("name");
  var description = localStorage.getItem("description");

  namehed.innerHTML = name;
  deshead.innerHTML = description;
  console.log(name);
  console.log(description);
}
