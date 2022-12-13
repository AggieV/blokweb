// JavaScript Document
console.log("hallo");

/*algemeen*/

window.addEventListener('scroll', () => {
	document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

/*darkmode/lightmode switch*/

// let LightModeButton = document.querySelectorAll("section > button");

// LightModeButton.forEach(); {
// 	LightModeButton.addEventListener("click", toggleMenu);
// }

// // LightModeButtons.forEach(); {
// // 	LightModeButton.addEventListener("click", toggleMenu);
// // }

// function toggleMenu() {
// 	let deButtonWaaropGekliktIs = this; 
// 	let deSectionWaarDeButtonInZit = deButtonWaaropGekliktIs.closest("section");
// 	body.classList.toggle("open");
// }

/*moviepass*/
/*scroll animation icons voordelen vue moviepass*/
/*bron:https://css-tricks.com/books/greatest-css-tricks/scroll-animation/*/


/*likebutton reviews*/

let deLikeButton = document.querySelector("section:nth-of-type(7) button");
console.log("deLikeButton");

deLikeButton.addEventListener("click", wordRood);

function wordRood(){
deLikeButton.classList.toggle("roodworden");
}


/*hamburgermenu*/

let hetHamburgerMenu = document.querySelector("header > button");
let nav = document.querySelector("header nav");
console.log("hamburgermenu");
let sluitButton = document.querySelector("header nav button");
console.log("hamburgermenu");


hetHamburgerMenu.addEventListener("click", klapMenuOpen);

function klapMenuOpen() {
    nav.classList.add("menuopenklappen");
}

sluitButton.addEventListener("click", klapMenuDicht);

function klapMenuDicht() {
    nav.classList.remove("menuopenklappen");
    nav.classList.add("menudichtklappen");
}

/*dropdown veelgestelde vragen */

let deMenuButtons = document.querySelectorAll("nav > ul:first-child > li:nth-of-type(2) > a > button, section:nth-child(8), section:nth-child(9), section:nth-child(10), section:nth-child(16) > button");
let deMenuPs = document.querySelectorAll("nav > ul:first-child > li:nth-of-type(2) > a > section > ul, section:nth-child(8) >  p, section:nth-child(9) > p, section:nth-child(10) > p, section:nth-child(16)  > ul");

deMenuButtons.forEach(deMenuButton => {
	deMenuButton.addEventListener("click", toggleMenu);
});

deMenuPs.forEach(deMenuPs => {
	deMenuPs.addEventListener("click", toggleMenu);
});

function toggleMenu() {
	let deButtonWaaropGekliktIs = this; 
	let deSectionWaarDeButtonInZit = deButtonWaaropGekliktIs.closest("section");
	deSectionWaarDeButtonInZit.classList.toggle("open");
}


/*maak knop van oranje naar blauw en weer terug*/

// var deEersteButton = document.querySelector("section:nth-of-type(3) button:first-child");
// console.log("deEersteButton");

// deEersteButton.addEventListener("click", wordBlauw);

// function wordBlauw(){
//     deEersteButton.classList.toggle("blauwworden");
// }

/*trailers*/