
// Add smooth scrolling to all links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});


range.oninput = () =>
  document.body.style.setProperty('--pos', range.value + '%')

