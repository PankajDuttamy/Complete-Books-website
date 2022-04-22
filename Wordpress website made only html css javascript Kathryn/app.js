// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// top links
const topLinks = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLinks.classList.add("show-link");
  } else {
    topLinks.classList.remove("show-link");
  }
});
