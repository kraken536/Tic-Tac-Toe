//Now Let's configure the javascript:

const selectBox = document.querySelector(".select-box");
const selectXBtn = document.querySelector(".playerX");
const selectOBtn = document.querySelector(".playerO");
const playboard = document.querySelector(".play-board");
const wonText = document.querySelector(".won-text");
const resultBox = document.querySelector(".result-box");
const allBox = document.querySelectorAll("section span");
const players = document.querySelectorAll(".players");

window.onload = ()=> { //Once the window is loaded...onload works
    selectXBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
    });

    selectOBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class", "players active");
    });

    
    for(let i = 0; i < allBox.length; i++){
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

let playerXicon = "fas fa-times"; //class name of fontawesome cross icon.
let playerOicon = "far fa-circle"; //class name of fontawesome circle icon.

function clickedBox(element){

}
