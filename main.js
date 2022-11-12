const btnToggle = document.getElementById("toggle");
const nav = document.querySelector(".nav");
function handleToggle() {
  nav.classList.toggle("view");
}
btnToggle.addEventListener("click", handleToggle);
const menu = document.querySelectorAll("#menu li a");

function handleTab(e) {
  e.preventDefault();
  nav.classList.toggle("view");
  if (e.target.className === "") {
    document.getElementById("generic").classList.add("hidden");
    document.querySelector(".main").classList.remove("hidden");
  } else {
    document.getElementById("generic").classList.remove("hidden");
    document.querySelector(".main").classList.add("hidden");
  }
}
menu.forEach((menuTab) => {
  menuTab.addEventListener("click", handleTab);
});
