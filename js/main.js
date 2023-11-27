document.addEventListener("DOMContentLoaded", function () {
  let swiper = document.querySelector(".mySwiper");
  const params = {
    injectStyles: [
      `
      .swiper-button-prev, .swiper-button-next {
            width: 67px;
            height: 67px;
            background-image: url(/img/right-button.svg);
            margin-top: 0
        }
        
        .swiper-button-prev svg, .swiper-button-next svg {
            display: none;
        }

        .swiper-button-prev {
            transform: rotate(180deg);
            left: 15%;
        }

        .swiper-button-next {
            right: 15%;
        }

        .swiper-pagination {
            margin-bottom: 15px;
        }

        .swiper-pagination-bullet {
            background-color: var(--white);
            opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: var(--point-color);
        }
    `,
    ],
  };

  Object.assign(swiper, params);
  swiper.initialize();
});

// 이벤트 리스너 추가
// for (let i of mainTitle) {
//   i.addEventListener("mouseenter", enterHandler);
// }

// nav.addEventListener("mouseleave", leaveHandler);

// // 이벤트 리스너 제거
// for (let i of mainTitle) {
//   i.removeEventListener("mouseenter", enterHandler);
// }

// nav.removeEventListener("mouseleave", leaveHandler);

// var mySwiper = new Swiper(".swiper-container", {
//   pagination: ".pagination",
//   loop: true,
//   autoplay: 1000,
//   paginationClickable: true,
// });
// $(".swiper-container").on("mouseenter", function (e) {
//   console.log("stop autoplay");
//   mySwiper.stopAutoplay();
// });
// $(".swiper-container").on("mouseleave", function (e) {
//   console.log("start autoplay");
//   mySwiper.startAutoplay();
// });
