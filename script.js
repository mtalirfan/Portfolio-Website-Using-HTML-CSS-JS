const loadStateFromStorage = () => {
  if (localStorage.getItem("theme") === "light") {
    themeClassToggle();
  } else {
    localStorage.setItem("theme", "dark");
  }

  let page = localStorage.getItem("page");
  if (!page) {
    localStorage.setItem("page", "home");
    page = "home";
  }
  switch (page) {
    case "home":
      setPage(page);
      break;
    case "about":
      setPage(page);
      break;
    case "portfolio":
      setPage(page);
      break;
    case "blogs":
      setPage(page);
      break;
    case "contact":
      setPage(page);
      break;
    default:
      page = "home";
      setPage(page);
      break;
  }
};

const setPage = (page) => {
  document.querySelector(".active-btn").classList.remove("active-btn");
  document.querySelector(`[data-id="${page}"]`).classList.add("active-btn");
  document.querySelector(".active").classList.remove("active");
  document.getElementById(page).classList.add("active");
  localStorage.setItem("page", page);
};

const pageTransitions = () => {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      page = this.dataset.id;
      setPage(page);
      // document.querySelector(".active-btn").classList.remove("active-btn");
      // this.classList.add("active-btn");
      // document.querySelector(".active").classList.remove("active");
      // document.getElementById(button.dataset.id).classList.add("active");
    });
  });
};

const themeToggle = () => {
  document.querySelector(".theme-btn").addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
    } else if (theme === "light") {
      localStorage.setItem("theme", "dark");
    }
    themeClassToggle();
  });
};

const themeClassToggle = () => {
  document.body.classList.toggle("light-mode");
  document.querySelector(".theme-btn").classList.toggle("light-mode");
  document.querySelectorAll(".section-shape").forEach((shape) => {
    shape.classList.toggle("light-mode");
  });
  document.querySelectorAll(".shape-text").forEach((shapeText) => {
    shapeText.classList.toggle("light-mode");
  });
};

window.addEventListener("load", function () {
  loadStateFromStorage();
  pageTransitions();
  themeToggle();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
