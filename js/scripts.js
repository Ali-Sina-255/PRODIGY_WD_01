var navbar = document.getElementById("main-nav");
var a = document.querySelectorAll("a");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "#c72727";
    a.forEach((item) => {
      item.style.color = "#fff";
    });
  } else {
    navbar.style.backgroundColor = ""; // Reset the background-color to the default
    a.forEach((item) => {
      item.style.color = "";
    });
  }
});
