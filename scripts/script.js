// JavaScript Document
console.log("hallo");

/*moviepass*/
/*het hamburgermenu open en dicht klappen*/

var hetHamburgerMenu = document.querySelector("header nav ul li:nth-of-type(3)");
console.log("hamburgermenu");

hetHamburgerMenu.addEventListener("click", klapMenuOpenEnDicht);

function klapMenuOpenEnDicht(){
    hetHamburgerMenu.classList.toggle("menuopenendichtklappen");
}


/*maak knop van oranje naar blauw en weer terug*/

var deEersteButton = document.querySelector("section:nth-of-type(3) button:first-child");
console.log("deEersteButton");

deEersteButton.addEventListener("click", wordBlauw);

function wordBlauw(){
    deEersteButton.classList.toggle("blauwworden");
}

/*trailers*/