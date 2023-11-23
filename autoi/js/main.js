
// dropdown


let mainTitle = document.querySelectorAll(".menu-title li"),
  nav = document.querySelector(".drop-menu");

for (let i of mainTitle) {
  i.addEventListener("mouseenter", () => {
    nav.classList.add("active");
  });
}
nav.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
});


// 이벤트 리스너 추가
for (let i of mainTitle) {
	i.addEventListener("mouseenter", enterHandler);
  }
  
  nav.addEventListener("mouseleave", leaveHandler);
  
  // 이벤트 리스너 제거
  for (let i of mainTitle) {
	i.removeEventListener("mouseenter", enterHandler);
  }
  
  nav.removeEventListener("mouseleave", leaveHandler);



// swiper

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });





