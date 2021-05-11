const knight = document.getElementsByClassName("knight")
const buttonknight = document.getElementById("buttonknight")
const rook = document.getElementsByClassName("rook")
const buttonrook = document.getElementById("buttonrook")
const bishop = document.getElementsByClassName("bishop")
const buttonbishop = document.getElementById("buttonbishop")
const king = document.getElementsByClassName("king")
const buttonking = document.getElementById("buttonking")
const queen = document.getElementsByClassName("queen")
const buttonqueen = document.getElementById("buttonqueen")
const pawn = document.getElementsByClassName("pawn")
const buttonpawn = document.getElementById("buttonpawn")

let pieces = {
    value: ""
}
function setValue(value) {
    pieces.value = value
}

function openTable(){
    const table = document.getElementById("divtable");
    const textButton = document.getElementById("buttonexamplelabel");
    table.style.display = "block"
    textButton.innerHTML = "Close"
}
function closeTable(){
    const table = document.getElementById("divtable");
    const textButton = document.getElementById("buttonexamplelabel");
    table.style.display = "none"
    textButton.innerHTML = "Example"
    clearInterval(kingMovement)
    clearInterval(queenMovement)
    clearInterval(bishopMovement)
    clearInterval(knightMovement)
    clearInterval(rookMovement)
    clearInterval(pawnMovement)
    resetPieces()
}

var kingMovement
var queenMovement
var bishopMovement
var knightMovement
var rookMovement
var pawnMovement
function mostrardiv() {
    const table = document.getElementById("divtable");
    const button = document.getElementById("buttonexample");
    const alert = document.getElementById("alert");
    if (pieces.value == "" ){
        alert.style.display = "block"
    } else {
        alert.style.display = "none"
    }
    if (table.style.display == "block") {
        closeTable();
        button.checked = false;
    }
    if (button.checked == true) {
        openTable();
        if (pieces.value == "king") {
            kingMovement = setInterval("mov_king()", 10)
        }
        if (pieces.value == "queen") {
            queenMovement = setInterval("mov_queen()", 10)
        }
        if (pieces.value == "bishop") {
            bishopMovement = setInterval("mov_bishop()", 10)
        }
        if (pieces.value == "knight") {
            knightMovement = setInterval("mov_knight()", 10)
        }
        if (pieces.value == "rook") {
            rookMovement = setInterval("mov_rook()", 10)
        }
        if (pieces.value == "pawn") {
            pawnMovement = setInterval("mov_pawn()", 10)
        }
    } else {
        closeTable();
    }
}

function resetPieces(){
    knight[0].style.bottom = 4.3 + "vw";
    knight[0].style.left = 12 + "vw";
    rook[0].style.bottom = 4.3 + "vw";
    rook[0].style.left = 4 + "vw";
    bishop[0].style.bottom = 4.3 + "vw";
    bishop[0].style.left = 8 + "vw";
    king[0].style.bottom = 4.3 + "vw";
    king[0].style.left = 20 + "vw";
    queen[0].style.bottom = 4.3 + "vw";
    queen[0].style.left = 16 + "vw";
    pawn[0].style.bottom = 8 + "vw";
    pawn[0].style.left = 28 + "vw";
}

var x_knight = 12;
var y_knight = 4.3;
function mov_knight() {
    if (y_knight < 12) {
        y_knight = y_knight + 0.1;
        knight[0].style.bottom = y_knight + "vw";
    }
    else if (x_knight < 16) {
        x_knight = x_knight + 0.1;
        knight[0].style.left = x_knight + "vw";
    }
    else {
        x_knight = 12;
        y_knight = 4.3;
        knight[0].style.bottom = y_knight + "vw";
        knight[0].style.left = x_knight + "vw";
    }
}

var x_rook = 4;
var y_rook = 4.3;
function mov_rook() {
    if (y_rook < 20) {
        y_rook = y_rook + 0.1;
        rook[0].style.bottom = y_rook + "vw";
    }
    else {
        x_rook = 4;
        y_rook = 4.3;
        rook[0].style.bottom = y_rook + "vw";
        rook[0].style.left = x_rook + "vw";
    }
}

var x_bishop = 8;
var y_bishop = 4.3;
function mov_bishop() {
    if (y_bishop < 24) {
        y_bishop = y_bishop + 0.1;
        x_bishop = x_bishop + 0.1;
        bishop[0].style.bottom = y_bishop + "vw";
        bishop[0].style.left = x_bishop + "vw";
    }
    else {
        x_bishop = 8;
        y_bishop = 4.3;
        bishop[0].style.bottom = y_bishop + "vw";
        bishop[0].style.left = x_bishop + "vw";
    }
}

var x_king = 20;
var y_king = 4.3;
var y_king1 = 4.3;
function mov_king() {
    if (y_king < 8) {
        y_king = y_king + 0.1;
        king[0].style.bottom = y_king + "vw";
    }
    else if (y_king1 < 8) {
        y_king1 = y_king1 + 0.1;
        x_king = x_king + 0.1;
        king[0].style.bottom = y_king1 + "vw";
        king[0].style.left = x_king + "vw";
    }
    else {
        x_king = 20;
        y_king = 4.3;
        y_king1 = 4.3;
        king[0].style.bottom = y_king + "vw";
        king[0].style.left = x_king + "vw";
    }
}

var x_queen = 16;
var y_queen = 4.3;
var y_queen1 = 4.3;
function mov_queen() {
    if (y_queen < 20) {
        y_queen = y_queen + 0.1;
        queen[0].style.bottom = y_queen + "vw";
    }
    else if (y_queen1 < 12) {
        y_queen1 = y_queen1 + 0.1;
        x_queen = x_queen + 0.1;
        queen[0].style.bottom = y_queen1 + "vw";
        queen[0].style.left = x_queen + "vw";

    } else {
        x_queen = 16;
        y_queen = 4.3;
        y_queen1 = 4.3;
        queen[0].style.bottom = y_queen + "vw";
        queen[0].style.left = x_queen + "vw";
    }
}

var x_pawn = 28;
var y_pawn = 8;
function mov_pawn() {
    if (y_pawn < 12) {
        y_pawn = y_pawn + 0.1;
        pawn[0].style.bottom = y_pawn + "vw";
    }
    else {
        x_pawn = 28;
        y_pawn = 8;
        pawn[0].style.bottom = y_pawn + "vw";
        pawn[0].style.left = x_pawn + "vw";
    }
}