document.addEventListener("DOMContentLoaded", function () {
  let swiper = document.querySelector(".mySwiper");
  const params = {
    injectStyles: [
      `

      .swiper-button-prev svg, .swiper-button-next svg {
        display: none;
    }

      .swiper-button-prev, .swiper-button-next {
            width: 67px;
            height: 67px;
            background-image: url(/img/right-button.svg);
            margin-top: 0
        }
        
        .swiper-button-prev {
            transform: rotate(180deg);
            left: 13%;
        }

        .swiper-button-next {
            right: 13%;
        }

        .swiper-button-prev:hover, .swiper-button-next:hover{
            background-image: url(/img/hover-arrow.svg);
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

// map

document.addEventListener("DOMContentLoaded", function () {
  let tabMenu = document.querySelectorAll(".tab-menu li");
  let tabContent = document.querySelectorAll(".tab-content > div");

  tabMenu[0].classList.add("active");
  tabContent.forEach((content) => (content.style.display = "none"));
  tabContent[0].style.display = "block";

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      tabMenu.forEach((menu) => menu.classList.remove("active"));
      e.currentTarget.classList.add("active");

      tabContent.forEach((content) => (content.style.display = "none"));
      tabContent[index].style.display = "block";
    });
  });
});
