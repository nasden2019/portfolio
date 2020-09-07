let texts = ["Alex Declercq", "Frontend developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, index++);

  document.querySelector("#text2").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

// MOBILE TYPE EFFECT
// let texts2 = ["Natbar Coming Soon"];
// let count2 = 0;
// let index2 = 0;
// let currentText2 = "";
// let letter2 = "";

// (function type() {
//   if (count2 === texts2.length) {
//     count2 = 0;
//   }
//   currentText2 = texts2[count2];
//   letter2 = currentText2.slice(0, index++);

//   document.querySelector("#text").textContent = letter2;

//   if (letter2.length === currentText2.length) {
//     count2++;
//     index = 0;
//   }
//   setTimeout(type, 500);
// })();


// -------------LANGUAGES ------------
const tabSelectors = document.querySelectorAll(".tab-selectors"); // the flags
const tabContent = document.querySelectorAll(".tab-content"); // the texts

tabSelectors.forEach((tab, tabIndex) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabSelectors.forEach((tab) => {
      tab.classList.remove("red-border");
    });
    tab.classList.add("red-border");

    tabContent.forEach((content, contentIndex) => {
      if (contentIndex == tabIndex) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});


// NAVBAR
// const nav = document.querySelector('.navMob');

// window.onscroll = () => {
//   if (document.documentElement.scrollTop >= 600) {
//     nav.style.padding = "30px 0"
//     nav.style.background = "red";
//   }
// }