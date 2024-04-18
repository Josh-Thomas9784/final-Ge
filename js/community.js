const part1 = document.querySelector(".part1");

const tl = new TimelineMax();
tl.fromTo(part1, 1,{height:"0vh"}, {height:"70vh", ease: Power2.easeInOut});
