"use strict";
let count = 0;
let totalcount = 5;
let finaldata = [];
async function logBlog(e) {
  // e.preventDefault();

  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    const blogsitems = data.posts;
    console.log(blogsitems);
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
