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


function changeBg(){
  var navbar = document.getElementById('header');
  var scrollValue = window.scrollY;
  if(scrollValue < 150){
    navbar.classList.remove("bgColor")
  } else{
    navbar.classList.add('bgColor')
  }
}

window.addEventListener('scroll', changeBg);


