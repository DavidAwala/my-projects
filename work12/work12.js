const choices=["rock","paper","scissors"];
const playd=document.getElementById("pdisplay");
const computerd=document.getElementById("cdisplay");
const resultd=document.getElementById("rdisplay");
const psd=document.getElementById("psd");
const csd=document.getElementById("csd");
let ps=0;
let cs=0;


function playgame(playerdec) {
    
    const cdec=choices[Math.floor(Math.random()*3)];
    let result = "";
    
    if (playerdec===cdec) {
        result="IT'S A TIE!"
    } 
    else {
      switch (playerdec) {
        case "rock":
         result= cdec==="scissors" ? "you win!":"you lose";
            break;
            case "paper":
                result= cdec==="rock" ? "you win!":"you lose";
                   break;
                   case "Scissors":
                    result= cdec==="paper" ? "you win!":"you lose";
                       break;
      
        default:
            break;
      }  
    }
    playerdec.textContent=`PLAYER: ${playerdec}`;
      computerd.textContent=`COMPUTER: ${cdec}`;
      resultd.textContent= result;
      resultd.classList.remove("red", "green")

      switch (result) {
        case "you win!":
            resultd.classList.add("green");
            ps++;
            psd.textContent=ps;
            break;
            case "you lose":
                resultd.classList.add("red");
                cs++;
                csd.textContent=cs;
                break;
      
        default:
            break;
      }
}

