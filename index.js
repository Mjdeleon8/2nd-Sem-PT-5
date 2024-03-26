// next & previous buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let firstContainer = document.getElementById("first-container");
let secondContainer = document.getElementById("second-container");
let greet = document.getElementById("container-h");

previous.addEventListener("click", () => {
  firstContainer.style.display = "flex"; // first container visible
  secondContainer.style.display = "none"; // second container invisible
});

next.addEventListener("click", () => {
  firstContainer.style.display = "none";
  secondContainer.style.display = "block";
  secondContainer.style.transform = "translateY(55px) translateX(43px)";
});

function handleCheckboxClick(checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (currentCheckbox) {
    if (currentCheckbox.id !== checkboxId) {
      currentCheckbox.checked = false;
    }
  });
}

let firstName = document.getElementById("first");
let middleName = document.getElementById("middle");
let lastName = document.getElementById("last");

firstName.value;
middleName.value;
lastName.value;

var h6Elements = document.querySelectorAll(".age-container h6");

document.addEventListener("DOMContentLoaded", function () {
  h6Elements.forEach(function (element) {
    element.addEventListener("click", function () {
      h6Elements.forEach(function (el) {
        el.style.color = "black";
      });
      this.style.color = "purple";
    });
  });
});

// sex

let sexHandler = document.getElementById("sex-value");
let sexMale = document.getElementById("male");
let sexFemale = document.getElementById("female");
let sexOther = document.getElementById("other");

// transport
let walk = document.getElementById("walk");
let car = document.getElementById("car");
let commute = document.getElementById("commute");

// date

let year = document.getElementById("date");

// textarea

let firstColumn = document.getElementById("first-cl");
let secondColumn = document.getElementById("second-cl");

// reset button
let reset = document.getElementById("reset_btn");

function reset_btn() {
  // full name
  firstName.value = "";
  middleName.value = "";
  lastName.value = "";

  // year
  year.value = "";

  // ages

  var h6Elements = document.querySelectorAll("h6");
  h6Elements.forEach(function (element) {
    element.style.color = "black";
  });

  // sex
  sexMale.checked = false;
  sexFemale.checked = false;
  sexOther.checked = false;

  // transport
  walk.checked = false;
  car.checked = false;
  commute.checked = false;

  // textarea
  firstColumn.value = "";
  secondColumn.value = "";
}

let enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", () => {
  if (firstName.value.trim() === "") {
    alert("The first name is empty. Please enter");
  }
  if (middleName.value.trim() === "") {
    alert("The middle name is empty. Please enter");
  }
  if (lastName.value.trim() === "") {
    alert("The last name is empty. Please enter");
  }

  if (!sexMale.checked && !sexFemale.checked && !sexOther.checked) {
    alert("Please select your sex");
  }

  if (!walk.checked && !car.checked && !commute.checked) {
    alert("Please select your transport");
  }

  if (firstColumn.value.trim() === "") {
    alert("The first column is empty. Please enter");
  }

  if (secondColumn.value.trim() === "") {
    alert("The second column is empty. Please enter");
  } else {
    alert(
      `Thank you for surveying. Have a great day ${firstName.value} ${middleName.value} ${lastName.value}`
    );
  }
});
