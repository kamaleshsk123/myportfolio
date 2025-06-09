/*toggle style switcher */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler ");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
//hide style - switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("close");
  }
});

//theme colors

const alternateStyles =
  document.querySelectorAll(".alternate-style"); /*Style=>Styles */
function setActivestyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* theme light and dark */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  // Set dark mode as default
  document.body.classList.add("dark");

  // Update the icon based on dark mode
  dayNight.querySelector("i").classList.remove("fa-moon");
  dayNight.querySelector("i").classList.add("fa-sun");
});

const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add(".fadeOut");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 5000);
});
