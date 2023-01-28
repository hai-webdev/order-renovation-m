// 首页使用的js
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { clearInterval } from "timers";
// 引入公共css
import "../common/reset.css";
import "./index.less";

const galleryThumbs0 = new Swiper(".gallery-thumbs0", {
  spaceBetween: 5,
  slidesPerView: 3,
  loop: true,
});

const effectSwiper = new Swiper(".effect-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs0,
  },
});

const galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

tabChange(".nav-list .nav-item", ".img-list .img-item");

function tabChange(nav, list) {
  const navLen = $(nav).length;
  const listLen = $(list).length;
  let autoIndex = 0;
  if (navLen !== listLen) {
    alert("程序有误，错误信息请查看控制台！");
    console.log(`${nav} 与 ${list}的长度不符！`);
  }
  function autoChange() {
    // console.log(autoIndex);
    if (autoIndex + 1 === navLen) {
      autoIndex = 0;
    } else {
      ++autoIndex;
    }
    $(nav).eq(autoIndex).addClass("active").siblings().removeClass("active");
    $(list).eq(autoIndex).addClass("active").siblings().removeClass("active");
  }
  var interval = setInterval(autoChange, 3000);

  $(nav).on("click", function () {
    // clearInterval(interval);
    var index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(list).eq(index).addClass("active").siblings().removeClass("active");
    autoIndex = index;
    // interval = setInterval(autoChange, 3000);
  });
}

$(".popup-show").on("click", () => {
  $(".popup-form").fadeIn();
});

$(".close").on("click", () => {
  $(".popup-form").fadeOut();
});
