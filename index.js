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

    allBox.forEach(box => {
        box.setAttribute("onclick", "clickedBox(this)")
    })

    selectXBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeX");
    });

    selectOBtn.addEventListener("click", ()=>{
        selectBox.classList.add("hide");
        playboard.classList.add("show");
        players.setAttribute("class","players activeO");
    });
}

let playerXicon = "fas fa-times"; //class name of fontawesome cross icon.
let playerOicon = "far fa-circle"; //class name of fontawesome circle icon.
let playerSign = "X";

/*
Those icons from fontawesome above don't a appear on the web page 
if don't take our own key <script> from the fr-ontawesome official website. 
*/

//User click function
function clickedBox(element){
    if(players.classList.contains("activeO")){
        playerSign = "O";
        element.innerHTML = `<i class="${playerOicon}"></i>`;
        players.setAttribute("class", "players activeX");
        element.setAttribute("id", playerSign);
    }else{
        playerSign = "X";
        element.innerHTML = `<i class="${playerXicon}"></i>`;
        players.setAttribute("class", "players activeO");
        element.setAttribute("id", playerSign);
    }

    element.style.pointerEvents = "none"; 
    playboard.style.pointerEvents = "none"; 
    setTimeout(bot, 850); //The bot function will be executed after 1 second the time is written in millisecond
}


//Bot click function.
function bot(){
    let unselectedBox = []; //We'll store all the non selected boxes in this array.
    
    //The for loop is used to check the empty boxes after each click.
    for(let i = 0; i < allBox.length; i++){ 
        if(allBox[i].childElementCount == 0){
            unselectedBox.push(i);
        }
    }

    let randomBox = unselectedBox[Math.floor(Math.random() * unselectedBox.length)];
    
    if(unselectedBox.length > 0){
        if(players.classList.contains("activeO")){
            allBox[randomBox].innerHTML = `<i class="${playerOicon}"></i>`;
            players.setAttribute("class", "players activeX");
            playerSign = "O";
        }else{
            allBox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`;
            players.setAttribute("class", "players activeO");
            playerSign = "X";
        }
        allBox[randomBox].setAttribute("id", playerSign);
        allBox[randomBox].style.pointerEvents = "none";
    }

    playboard.style.pointerEvents = "all";    
}


//This function will select the winner.
function getId(){

}