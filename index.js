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

/*
Those icons from fontawesome above don't a appear on the web page 
if don't take our own key <script> from the fr-ontawesome official website. 
*/

//User click function
function clickedBox(element){
    if(players.classList.contains("activeO")){
        element.innerHTML = `<i class="${playerOicon}"></i>`;
        players.setAttribute("class", "players activeX");
    }else{
        element.innerHTML = `<i class="${playerXicon}"></i>`;
        players.setAttribute("class", "players activeO");
    }
    element.style.pointerEvents = "none";  
    setTimeout(bot, 1000); //The bot function will be executed after 1 second the time is written in millisecond
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
        }else{
            allBox[randomBox].innerHTML = `<i class="${playerXicon}"></i>`;
            players.setAttribute("class", "players activeO");
        }
        allBox[randomBox].style.pointerEvents = "none";
    }    
}
