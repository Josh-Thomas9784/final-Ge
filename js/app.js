const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      }
  })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
      } else{
        entry.target.classList.remove('show2');
      }
  })
})


const hiddenElements1 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show3');
      } else{
        entry.target.classList.remove('show3');
      }
  })
})


const hiddenElements2 = document.querySelectorAll('.hidden3');
hiddenElements2.forEach((el) => observer2.observe(el));


// navbar scroll
var lastScrollTop = 0;
navbar = document.getElementById('header');
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else{
    navbar.style.top="0px";
  }
  lastScrollTop = scrollTop;
})


// DARK MODE
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.getElementById('darkmode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark-theme');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark-theme');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
