var roads = ["case12", "case22", "case32", "case42", "case44", "case52", 
            "case53","case54", "case64", "case74", "case83", "case84", 
            "case85", "case86", "case96", "case106"];


var persoTop = 118;
var persoLeft = 260;

var speed = 5;

function fieldGenerator () {
    for (let i = 0; i < roads.length; i++) {
        document.getElementById(roads[i]).style.backgroundColor = "#bdc3c7";
    }
}

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
  
    if (nomTouche === 'Control') {
      return;
    }
  
    if (event.ctrlKey) {
      
    } else {
        if(nomTouche == "ArrowUp") {
            persoTop-=speed;
            document.getElementById("player").style.top = persoTop + "px";
        } else if(nomTouche == "ArrowDown") {
            persoTop+=speed;
            document.getElementById("player").style.top = persoTop + "px";
        } else if(nomTouche == "ArrowRight") {
            persoLeft+=speed;
            document.getElementById("player").style.left = persoLeft + "px";
        } else if(nomTouche == "ArrowLeft") {
            persoLeft-=speed;
            document.getElementById("player").style.left = persoLeft + "px";
        }
    }
}, false);

