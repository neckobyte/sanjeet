const furry = document.querySelector('.cursor-furry');

let mouseX = 0, mouseY = 0;
let furryX = 0, furryY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFurry() {
  furryX += (mouseX - furryX) * 0.12;
  furryY += (mouseY - furryY) * 0.12;
  furry.style.left = furryX + 'px';
  furry.style.top  = furryY + 'px';
  requestAnimationFrame(animateFurry);
}
animateFurry();



gsap.from('.pill-header', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  clearProps: 'all',
});

const videoCards = document.querySelectorAll('.collage-card video');
videoCards.forEach(video => {
  const card = video.closest('.collage-card');
  if (!card) return;

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});