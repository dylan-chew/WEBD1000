"use strict"

function navButton() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } 
    else {
        x.className = "topnav";
    }
}

/* Flipper Left */

function flipCardLeft()
{
    document.getElementById('headerLeft').style.display = 'none';
    document.getElementById('ulLeft').style.display = 'block';}

function returnCardLeft()
{
    document.getElementById('headerLeft').style.display = 'block';
    document.getElementById('ulLeft').style.display = 'none';
}




/* Flipper Right */


function flipCardRight()
{
    document.getElementById('headerRight').style.display = 'none';
    document.getElementById('ulRight').style.display = 'block';
}

function returnCardRight()
{
    document.getElementById('headerRight').style.display = 'block';
    document.getElementById('ulRight').style.display = 'none';
}