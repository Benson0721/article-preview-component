const button = document.querySelectorAll(".article__shareIcon");
const footer1 = document.querySelector(".article__footer--type1");
const footer2 = document.querySelector(".article__footer--type2");
const links = document.querySelectorAll("a");

button.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(footer2.classList);
    footer2.classList.toggle("visible");
    links.forEach((link) => {
      link.classList.toggle("disable");
    });
  });
});
