window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.toggle("light-mode");
    document.querySelector(".theme-btn").classList.toggle("light-mode");
    document.querySelectorAll(".section-shape").forEach((shape) => {
      shape.classList.toggle("light-mode");
    });
    document.querySelectorAll(".shape-text").forEach((shapeText) => {
      shapeText.classList.toggle("light-mode");
    });
  } else {
    localStorage.setItem("theme", "dark");
  }
});

const pageTransitions = () => {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
};

const themeToggle = () => {
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else if (localStorage.getItem("theme") === "light") {
      localStorage.setItem("theme", "dark");
    }
    document.querySelector(".theme-btn").classList.toggle("light-mode");
    document.querySelectorAll(".section-shape").forEach((shape) => {
      shape.classList.toggle("light-mode");
    });
    document.querySelectorAll(".shape-text").forEach((shapeText) => {
      shapeText.classList.toggle("light-mode");
    });
  });
};

pageTransitions();
themeToggle();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
