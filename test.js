let bottommenu = document.querySelectorAll(".menu-title li"),
  nav = document.querySelector("nav");

for (let i of bottommenu) {
  i.addEventListener("mouseenter", () => {
    nav.classList.add("active");
  });
}
nav.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
});

