window.addEventListener("load",()=>{
    if (localStorage.getItem("highRPS")==null){
        localStorage.setItem("highRPS","0");
    }
    document.querySelector("#highScore").innerHTML=localStorage.getItem("highRPS");
})
//     document.querySelector("#score").innerHTML=localStorage.getItem("scoreRPS");
// })
// window.addEventListener("beforeunload",()=>{
//     if(!restarting)
//     {localStorage.removeItem("scoreRPS");}
//     // debugger
    
// })
function ruleDes() {
    document.querySelector("#ruleDes").style.display = "block";
    document.querySelector("nav").style.filter = "brightness(30%)"
    document.querySelector("#rule").disabled = true;
    document.querySelector("#cross").style.display = "block";
}
function cross() {
    document.querySelector("#ruleDes").style.display = "none";
    document.querySelector("nav").style.filter = "brightness(100%)"
    document.querySelector("#rule").disabled = false;
    document.querySelector("#cross").style.display = "none";
}
function play(userInput) {
    
    document.querySelector("nav").style.gap = "60px"
    // compChoice=["paper","sciccor","rock"];
    random = Math.floor(Math.random() * 3);
    // compChoice[random]
    result = null;
    if (userInput == random) {
        result = 2;
    }
    else if (userInput == 0) {
        if (random == 1) {
            result = 0;
        }
        else {
            result = 1;
        }
    }
    else if (userInput == 1) {
        if (random == 0) {
            result = 1;
        }
        else {
            result = 0;
        }
    }
    else if (userInput == 2) {
        if (random == 1) {
            result = 1;
        }
        else {
            result = 0;
        }
    }
    document.querySelector(".choose").classList.add("hide");
    document.querySelector(".resultContainer").style.display = "block";
    // document.querySelector("#result").innerHTML = result;
    if (result == 2) {
        document.querySelector("#result").innerHTML = "MATCH TIE";
    }
    else if (result == 0) {
        document.querySelector("#result").innerHTML = "YOU LOSE";
        glow("comp");
    }
    else {
        document.querySelector("#result").innerHTML = "YOU WIN";
        glow("user");
        // scoreRPS=parseInt(localStorage.getItem("scoreRPS"))+1;
        // localStorage.setItem("scoreRPS",scoreRPS);
        // document.querySelector("#score").innerHTML=localStorage.getItem("scoreRPS");
        scoreCount=parseInt(document.querySelector("#score").innerHTML);
        scoreCount++;
        document.querySelector("#score").innerHTML=scoreCount;
       if (parseInt(localStorage.getItem("highRPS"))<scoreCount){
        localStorage.setItem("highRPS",scoreCount);
       }
        document.querySelector("#highScore").innerHTML=localStorage.getItem("highRPS");
    }
    paper = document.querySelector(".mainpaper");
    rock = document.querySelector(".mainrock");
    scissor = document.querySelector(".mainscissor");
    // document.querySelector("#user").appendChild(rock);
    // document.querySelector("#comp").appendChild(paper);
    setResult = [paper, scissor, rock];
    document.querySelector("#user").appendChild(setResult[userInput].cloneNode(true));
    document.querySelector("#comp").appendChild(setResult[random].cloneNode(true));
    document.querySelector(".rules").style.display = "block";
}
function glow(input) {
    i = 1;
    interval = setInterval(() => {

        document.querySelector(`#${input}`).style.boxShadow = `0px 0px 17px ${i}px grey`;
        i++;
        if (i == 10) {
            clearInterval(interval);
        }
    }, 100);
}
function tryAgain() {
    document.querySelector("#user").innerHTML="";
    document.querySelector("#user").removeAttribute("style");
    document.querySelector("#comp").removeAttribute("style");
    document.querySelector("#comp").innerHTML="";
    document.querySelector(".choose").classList.remove("hide");
    // const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

    // // Function to handle the media query condition
    // function handleMobileScreenSizeChange(e) {
    //   if (e.matches) {
    //     // Code to run if screen size is 768px or less (mobile screen)
    //      document.querySelector(".top").style.top="150px";
    // document.querySelector(".mainrock").style.top="250px"
        
    //   }
    // }
    
    // // Initial check
    // handleMobileScreenSizeChange(mobileMediaQuery);
    document.querySelector(".resultContainer").style.display="none";
}