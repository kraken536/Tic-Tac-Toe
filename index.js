//Now Let's configure the javascript:

const selectBox = document.querySelector(".select-box");
const selectXBtn = document.querySelector(".playerX");
const selectOBtn = document.querySelector(".playerO");
const playboard = document.querySelector(".play-board");
const wonText = document.querySelector(".won-text");
const resultBox = document.querySelector(".result-box");
const allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");

window.onload = ()=> { //Once the window is loaded...onload works

    allBox.forEach(box => (box.setAttribute("onclick", "clickedBox(this)")))

    selectXBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeX");
    });

    selectOBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeO player");
    });
}

let playerXicon = "fas fa-times"; //class name of fontawesome cross icon.
let playerOicon = "far fa-circle"; //class name of fontawesome circle icon.

/*
Those icons from fontawesome above don't a appear on the web page 
if don't take our own key <script> from the fr-ontawesome official website. 
*/

function clickedBox(element){
    if(players.classList.contains("player")){
        element.innerHTML = `<i class="${playerXicon}"></i>`;
    }else{
        element.innerHTML = `<i class="${playerOicon}"></i>`;
    }
    element.style.pointerEvents = "none";   
}
