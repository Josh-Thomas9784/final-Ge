const hero = document.querySelector('.hero-text');

const tl = new TimelineMax();

tl.fromTo (hero, 1, {height: "100%"}, {height: "2%" });
