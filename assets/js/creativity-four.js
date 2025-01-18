const container = document.querySelector('.container');
const card = document.querySelector(".card");

container.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;

  const rotateX = (y / height) * 22;
  const rotateY = (x / width) * 22; 

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});


container.addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`
})