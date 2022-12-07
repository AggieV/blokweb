// JavaScript Document
console.log("hallo");

/*algemeen*/

/*moviepass*/

var hetHamburgerMenu = document.querySelector("header > button");
var nav = document.querySelector("header nav");
console.log("hamburgermenu");
var sluitButton = document.querySelector("header nav button");
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

let deMenuButtons = document.querySelectorAll("section:nth-child(8) > button, section:nth-child(9) > button, section:nth-child(10) > button");
let deMenuPs = document.querySelectorAll("section:nth-child(8) > p, section:nth-child(9) > p, section:nth-child(10) > p");

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