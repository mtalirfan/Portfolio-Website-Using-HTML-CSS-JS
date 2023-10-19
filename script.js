// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controls");
// const sectBtn = document.querySelectorAll(".control");
// const allSections = document.querySelector(".main-content");

// function PageTransitions() {
//   // Button click active class
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener("click", function () {
//       let currentBtn = document.querySelectorAll(".active-btn");
//       currentBtn[0].className = currentBtn[0].className.replace(
//         "active-btn",
//         ""
//       );
//       this.className += " active-btn";
//     });
//   }
//   // Section click active class
//   allSections.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     if (id) {
//       // remove selected from other btns
//       // sectBtns.forEach((btn) => {
//       //   btn.classList.remove("active");
//       // });
//       // // e.target.classList.add("active");

//       // hide other sections
//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });

//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
// }
// PageTransitions();

function PageThemeTransitions() {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.querySelector(".theme-btn").classList.toggle("light-mode");
    document.querySelectorAll(".section-shape").forEach((shape) => {
      shape.classList.toggle("light-mode");
    });
    document.querySelectorAll(".shape-text").forEach((shapeText) => {
      shapeText.classList.toggle("light-mode");
    });
  });
}

PageThemeTransitions();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}
