//Accordeon with Event Delegation
document.addEventListener("click", (event) => {
  let id = event.target.dataset.toggleId;

  if (event.target.classList.contains("accordion")) {
    event.target.classList.toggle("active");
  }

  let accordion = document.getElementById("select-6");
  let panel = document.querySelector(".panel");

  if (id == "accordion") {
    if (event.target.classList.contains("active")) {
      panel.style.display = "block";
    } else if (!event.target.classList.contains("active")) {
      panel.style.display = "none";
    }
  } else if (id == "searchAccordion") {
    event.preventDefault();
    let elem = [];
    elem.push(accordion, accordion.nextElementSibling);
    elem.forEach((item) => {
      if (item.style.display == "none" || item.style.display == "") {
        item.style.display = "block";
      } else if ((item.style.display = "block")) {
        item.style.display = "";
      }
    });
    const catalog = document.querySelector(".catalog");
    catalog.classList.toggle("catalog__active");
  }
});

//Customised select
const select1 = new CustomSelect("#select-1");
const select2 = new CustomSelect("#select-2");
const select3 = new CustomSelect("#select-3");
const select4 = new CustomSelect("#select-4");
const select5 = new CustomSelect("#select-5");
const select6 = new CustomSelect("#select-6");
const select7 = new CustomSelect("#select-7");

// Burger-menu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu_button", ".burger-menu_lines");
  let links = menu.find(".burger-menu_link");
  let overlay = menu.find(".burger-menu_overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu_active");

    if (menu.hasClass("burger-menu_active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}
burgerMenu(".burger-menu");
// End of burger menu

// Modal Window
// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("order");
// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
  modal.style.display = "block";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

setTimeout(() => {
  modal.style.display = "block";
}, 10000);

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
