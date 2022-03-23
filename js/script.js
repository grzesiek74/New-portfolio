// Wysuwanie bocznego menu (aside) po kliknięciu na ikonę burger

const burgerBtn = document.querySelector(".burger");
const asideMenu = document.querySelector("aside");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");

burgerBtn.addEventListener("click", function () {
  iconBurger.classList.toggle("show");
  iconX.classList.toggle("show");
  asideMenu.classList.toggle("show");
});

// Przyklejone menu do okna po scrollu

window.onscroll = function () {
  fixedMenu();
};

const desktop = document.querySelector(".desktop");

const fixed = desktop.offsetTop;

function fixedMenu() {
  if (window.pageYOffset > fixed) {
    desktop.classList.add("fixed");
  } else {
    desktop.classList.remove("fixed");
  }
}

// zamykanie navbara w mobile po kliknięciu opcji
const navLinks = document.querySelectorAll(".nav-link");
const aside = document.querySelector("aside");
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    aside.classList.remove("show");
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
  })
);

// SEKCJA PROJEKTY (SLIDER), ZMIANA PROJEKTÓW

let slides = document.querySelector(".projects").children;

let nextSlide = document.querySelector(".right");

let prevSlide = document.querySelector(".left");

let totalSlides = slides.length;

let index = 0;

nextSlide.onclick = function () {
  next("next");
};

prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

// SCROLL DO SEKCJI PORTFOLIO

$(".portfolioBtn,.downBtn").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".s2").offset().top,
    },
    700
  );
});

// $(".mPortfolio, .dPortfolio, .portfolioBtn, .downBtn").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s1").offset().top,
//     },
//     700
//   );
// });

// $(".mStart, .dStart").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $("header").offset().top,
//     },
//     700
//   );
// });

// $(".mAbout, .dAbout").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s2").offset().top,
//     },
//     700
//   );
// });

// $(".mSkills, .dSkills").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $(".s3").offset().top,
//     },
//     700
//   );
// });

// $(".mContact, .dContact").on("click", function () {
//   $("body, html").animate(
//     {
//       scrollTop: $("footer").offset().top,
//     },
//     700
//   );
// });

// Sekcja hobby - powiększanie zdjęć

$(".like").on("click", function () {
  $(this).toggleClass("zoom");
});

// Przycisk scroll to góry strony
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $(".goUp").addClass("show-btn");
  } else {
    $(".goUp").removeClass("show-btn");
  }
});

$(".goUp").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "300"
  );
});
