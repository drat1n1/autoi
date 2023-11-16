let currentIndex = 0;
const slides = document.querySelector('.slider').children;
const totalSlides = slides.length;

function moveSlider(direction) {
  if (direction === 'left') {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  } else {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  }
  const position = -currentIndex * 1000; // 1000px는 슬라이더의 너비입니다.
  document.querySelector('.slider').style.transform = `translateX(${position}px)`;
}