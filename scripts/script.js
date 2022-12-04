// JavaScript Document
console.log("hallo");

/*moviepass*/
/*het hamburgermenu open en dicht klappen*/

// var hetHamburgerMenu = document.querySelector("header nav ul li:nth-of-type(3)");
// console.log("hamburgermenu");

// hetHamburgerMenu.addEventListener("click", klapMenuOpenEnDicht);

// function klapMenuOpenEnDicht(){
//     hetHamburgerMenu.classList.toggle("menuopenendichtklappen");
// }

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


/*maak knop van oranje naar blauw en weer terug*/

var deEersteButton = document.querySelector("section:nth-of-type(3) button:first-child");
console.log("deEersteButton");

deEersteButton.addEventListener("click", wordBlauw);

function wordBlauw(){
    deEersteButton.classList.toggle("blauwworden");
}

/*trailers*/