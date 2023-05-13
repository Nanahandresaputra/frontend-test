const errAlert = document.getElementById("errNumber");
const table = document.getElementById("tableData");
const footer = document.getElementById("footer");
const buttonTab1 = document.getElementById("buttonTab1");
const buttonTab2 = document.getElementById("buttonTab2");
const buttonTab3 = document.getElementById("buttonTab3");
const contactTab = document.getElementById("nav-contact-tab");
const lowValue = document.getElementById("lowValue");

let inputNumber = document.getElementById("inputNumber");
let navTabContent = document.getElementById("nav-tabContent");
let numberValue = [];
let n;

// tabs2 value
buttonTab2.addEventListener("click", function () {
  for (let i = 0; i < n; i++) {
    let min = -1000;
    let max = 1000;
    let number = Math.floor(Math.random() * (max - min) + min);

    if (n > 0 && numberValue.length < n) {
      let tbody = document.getElementById("tbody");
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      td.id = i;
      td.innerHTML = number;
      tr.appendChild(td);
      tbody.appendChild(tr);
      numberValue.push(number);
      if (numberValue.length > 10) {
        footer.setAttribute("class", "position-relative");
      }
    } else if (numberValue.length >= n) {
      let data = document.getElementById(i);
      data.innerHTML = number;
      numberValue[i] = number;
    }
  }
  navTabContent.setAttribute("class", "tab-content h-100 mt-5");
});

// tabs3
buttonTab3.addEventListener("click", function () {
  let arr = numberValue.sort(function (a, b) {
    return a - b;
  });
  let sortArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      sortArr.push(arr[i]);
    }
  }
  lowValue.innerHTML = sortArr[0] - 1;
});

contactTab.addEventListener("click", function () {
  footer.setAttribute("class", "position-absolute bottom-0 w-100");
});

// change tab
buttonTab1.addEventListener("click", function () {
  let inputValue = inputNumber.value;
  if (inputValue <= 1000 && inputValue > 0) {
    let tab1 = document.querySelector("#nav-profile-tab");
    let tab2 = document.querySelector("#nav-home-tab");
    let tab = new bootstrap.Tab(tab1);
    tab.show();
    tab2.setAttribute("class", "nav-link disabled");
    n = inputValue;
  } else if (inputValue > 1000) {
    errAlert.innerHTML = "angka tidak boleh lebih dari 1000";
  } else if (inputValue <= 0) {
    errAlert.innerHTML = "angka tidak boleh kurang dari 1";
  }
});
