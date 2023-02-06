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

    for(let i = 0; i < allBox.length; i++){
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    };

    selectXBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeX");
    });

    selectOBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeO play");
    });
}

let playerXicon = "fas fa-times"; //class name of fontawesome cross icon.
let playerOicon = "far fa-circle"; //class name of fontawesome circle icon.

function clickedBox(element){
    if(players.classList.contains("play")){
        element.innerHTML = `<i class="${playerOicon}"></i>`;
    }else{
        element.innerHTML = `<i class="${playerOicon}"></i>`;
    }
}
