// JavaScript Document
console.log("hallo");

/*algemeen*/

/*search menu mobile*/

let deSearchButton = document.querySelector("header ul li:nth-of-type(7) button");
let deSearchField = document.querySelector("header ul li:nth-of-type(7) input");

deSearchButton.addEventListener("click", klapUit);

function klapUit(){
	deSearchField.classList.toggle("open");
}

/*lightmode switch*/

let lightModeButton = document.querySelector("header ul li:first-of-type button");
let body = document.querySelector("body");

lightModeButton.addEventListener("click", wordLicht);

function wordLicht() {
	body.classList.toggle("light-mode");

	if (lightModeButton.innerHTML === "Light mode") {
		lightModeButton.innerHTML = "Dark mode";
	  } else {
		lightModeButton.innerHTML = "Light mode";
	  }
}

/*hamburgermenu*/

let hetHamburgerMenu = document.querySelector("header ul li:nth-of-type(8) button");
let nav = document.querySelector("header nav");
let sluitButton = document.querySelector("header nav button");

hetHamburgerMenu.addEventListener("click", klapMenuOpen);

function klapMenuOpen() {
    nav.classList.remove("menudichtklappen"); 
    nav.classList.add("menuopenklappen");
}

sluitButton.addEventListener("click", klapMenuDicht);

function klapMenuDicht() {
    nav.classList.remove("menuopenklappen");
    nav.classList.add("menudichtklappen");
}

/*likebutton reviews*/

let deLikeButton = document.querySelector("section:nth-of-type(3) button span");
console.log("deLikeButton");

deLikeButton.addEventListener("click", wordRood);

function wordRood(){
	deLikeButton.classList.toggle("roodworden");
}

/*moviepass pagina*/
/*dropdown veelgestelde vragen */
button1 = "main section:nth-of-type(4) article:first-child ul li:first-child,"
button2 = "main section:nth-of-type(4) article:first-child ul li:nth-child(2),"
button3 = "main section:nth-of-type(4) article:first-child ul li:nth-child(3)"
let deMenuButtons = document.querySelectorAll(button1+button2+button3);

deMenuButtons.forEach(deMenuButton => {
	deMenuButton.addEventListener("click", toggleMenu);
});

function toggleMenu() {
	let deButtonWaaropGekliktIs = this; 
	let deSectionWaarDeButtonInZit = deButtonWaaropGekliktIs.closest("li");
	deSectionWaarDeButtonInZit.classList.toggle("open");
}

