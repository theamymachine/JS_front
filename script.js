// Exo 1 & // Exo 1 bis

function footerClick(){
    let footerEl = document.getElementsByTagName("footer")[0];
    let clickCount = 1 ;
    let onFooterClick = function(e) {
        console.log("click" + clickCount)
        clickCount ++;
    };
    footerEl.addEventListener("click", onFooterClick);
};

footerClick();

// Exo 2 

function navBarToggle(){
    let navbarEl = document.getElementById("navbarHeader");
    let hamburgerEl = document.getElementsByClassName("navbar-toggler")[0];
    let onNavbarClick = function(){
    navbarEl.classList.toggle("collapse");
    };
    hamburgerEl.addEventListener("click", onNavbarClick);
};

navBarToggle();

// Exo 3 

function cardOneRed(){
    let cardEl = document.getElementsByClassName("card")[0]; 
    let buttonEditEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]; 
    let onButtonClick = function(){
        cardEl.style.color = "red";
    };
    buttonEditEl.addEventListener("click", onButtonClick);
};

cardOneRed();

// Exo 4 

function cardTwoGreen(){
    let cardEl = document.getElementsByClassName("card")[1];
    let buttonEditEl = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
    let onButtonClick = function(){
        if (cardEl.style.color === 'green'){
            cardEl.style.color = '';
        }
        else {cardEl.style.color = 'green'
        };
    };
    buttonEditEl.addEventListener("click", onButtonClick)
};

cardTwoGreen();

// Exo 5 - ouvrir la navbar pour que ça marche 

function doubleClickNavbar(){
    let navbarEl = document.getElementById("navbarHeader");
    let linkEl = document.getElementsByTagName("link")[0];
    let onDoubleClick = function(){
        if (linkEl.disabled === true)
        {
            linkEl.disabled = false ;
        }
        else {linkEl.disabled = true }
    };
    navbarEl.addEventListener("dblclick", onDoubleClick);
};

doubleClickNavbar();

// Exo 6

let cardText = document.getElementsByClassName("card-text")[a];
let cardImage = document.getElementsByClassName("card-img-top")[b]; 
let viewButtonEl = document.getElementsByClassName("btn btn-sm btn-success")[c]; 

function makeTinyCards(){

    let onHover = function(){
        cardText.classList.toggle("collapse");
        if (cardImage.style.width === '20%'){
            cardImage.style.width = '208px';
        }
        else {cardImage.style.width = '20%'
        };  
    }; 

viewButtonEl[x].addEventListener("mouseover", onHover);
};

makeTinyCards();
