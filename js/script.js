const container = document.querySelector(".container");
const card = document.querySelector(".card");

container.addEventListener("mousemove", e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const title = document.querySelector(".title");
const car = document.querySelector(".car img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".description");
const buttons = document.querySelector(".buttons");

container.addEventListener("mouseenter", e => {
	card.style.transition = "none";
 	title.style.transform = "translateZ(105px)";
  car.style.transform = "translateZ(100px) rotateZ(-35deg)";
  description.style.transform = "translateZ(100px)";
  buttons.style.transform = "translateZ(90px)";
 	purchase.style.transform = "translateZ(70px)";
});
container.addEventListener("mouseleave", e => {
	card.style.transition = "all 0.5s ease";
  	card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  	title.style.transform = "translateZ(0px)";
  	car.style.transform = "translateZ(0px) rotateZ(0deg)";
  	description.style.transform = "translateZ(0px)";
  	buttons.style.transform = "translateZ(0px)";
 	  purchase.style.transform = "translateZ(0px)";
});