const body = document.querySelector("body");
const btn = document.getElementById("hider");
const text = document.getElementById("text");

//1 hide text and show again.
btn.onclick = function () {
  if (text.style.display !== "none") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
};

// 2  html structure with helping of DOM
body.insertAdjacentHTML(
  "afterend",
  `<div id="card">
  <h2>Temo</h2>
  <a href="#">Go To Profile</a>
  </div>`
);

// 3. background color red.
const card = document.getElementById("card");
card.style.backgroundColor = "red";
