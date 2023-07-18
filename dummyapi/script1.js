var finalData = [];
var count = 0;

function formsubmit() {
  // Prevent the form from submitting

  const name = document.getElementById("nameInput").value;
  const table = document.getElementById("employeeList");

  const pagination = document.getElementById("pagination");
  // const prevpage = document.getElementById("prev");
  // const nextpage = document.getElementById("next");

  const data = {
    nameVa: name,
  };
  finalData.push(data);
  const datas = toString(data);
  console.log(datas);
  localStorage.setItem("name", JSON.stringify(finalData));

  function showItem() {
    if (document.getElementById("employeeList").rows.length - 1 < 5) {
      let row = document.createElement("tr");
      table.appendChild(row);
      // console.log("wdqd");

      let th1 = document.createElement("th");
      th1.innerHTML = data.nameVa;
      row.appendChild(th1);

      let th3 = document.createElement("td");
      th3.innerHTML = "\u00d7";
      row.appendChild(th3);
    }
  }
  pagination.style.display = "flex";

  if (name.value === "") {
  } else {
    console.log(data);
    showItem();
  }

  table.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "TD") {
        e.target.parentElement.remove();
      }
    },
    false
  );
}

function deleteRow(arr) {
  console.log(arr, arr.rows);

  var rowCount = arr.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    arr.deleteRow(i);
  }
}

function handlenext() {
  deleteRow(document.getElementById("employeeList"));

  console.log(finalData);
  const table = document.getElementById("employeeList");
  const pagenum = document.getElementById("pagecount");
  pagenum.innerHTML = "2";
  finalData.forEach((data, index) => {
    console.log(data, index);
    if (index >= 5 && index <= 9) {
      let row = document.createElement("tr");
      table.appendChild(row);

      let th1 = document.createElement("th");
      th1.innerHTML = data.nameVa;
      row.appendChild(th1);

      let th3 = document.createElement("td");
      th3.innerHTML = "\u00d7";
      row.appendChild(th3);
    }
  });
}

function prevhandler() {
  console.log(finalData);
  const pagenum = document.getElementById("pagecount");
  const table = document.getElementById("employeeList");
  deleteRow(document.getElementById("employeeList"));

  pagenum.innerHTML = "1";

  finalData.forEach((data, index) => {
    // console.log(data, index);

    if (data && index < 5) {
      let row = document.createElement("tr");
      table.appendChild(row);

      let th1 = document.createElement("th");
      th1.innerHTML = data.nameVa;
      row.appendChild(th1);

      let th3 = document.createElement("td");
      th3.innerHTML = "\u00d7";
      row.appendChild(th3);
      console.log(data, index < 5);
      return data;
    }
    console.log(data);
  });
}

function clearFOrmData() {
  const table = document.getElementById("employeeList");
  localStorage.clear();
  // table.innerHTML = "";
  deleteRow(document.getElementById("employeeList"));
  // const namehed = document.getElementById("nameTitle");

  // namehed.innerHTML = "";

  // alert("are you sure ?");
}
