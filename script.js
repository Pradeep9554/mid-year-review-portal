// Smooth scroll effect
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Button click animation
document.querySelector('.cta').addEventListener('click', () => {
  alert("Welcome to the Mid-Year Review 🎉");
});

// Animate progress bars when visible
const progressBars = document.querySelectorAll('.fill');
function animateBars() {
  progressBars.forEach(bar => {
    const target = bar.getAttribute('data-width');
    bar.style.width = target + "%";
  });
}
window.addEventListener('scroll', () => {
  const container = document.querySelector('.progress-container');
  const position = container.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  if (position < screenHeight - 100) {
    animateBars();
  }
});
