// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// Highlight the nav link of the last section whose top has passed 35% of the viewport
const navLinks = [...links.querySelectorAll('a')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));

function updateActive() {
  const line = window.innerHeight * 0.35;
  let current = -1;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= line) current = i; });
  navLinks.forEach((a, i) => a.classList.toggle('active', i === current));
}
window.addEventListener('scroll', updateActive, { passive: true });
updateActive();
