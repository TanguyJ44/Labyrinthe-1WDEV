var roads = ["case12", "case22", "case32", "case42", "case44", "case52", 
            "case53","case54", "case64", "case74", "case83", "case84", 
            "case85", "case86", "case96", "case106"];


var persoTop = 118;
var persoLeft = 265;

var speed = 100;

var persoX = 1;
var persoY = 2;

function fieldGenerator () {
    for (let i = 0; i < roads.length; i++) {
        document.getElementById(roads[i]).style.backgroundColor = "#bdc3c7";
    }
}

function collideDetector (newX, newY) {
    const format = "" + newX + "" + newY;

    for (let i = 0; i < roads.length; i++) {
        if(roads[i].substr(4, 5) == format) {
            return true;
            break;
        }
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
            if(collideDetector(persoX, persoY-1) == true) {
                persoTop-=speed;
                persoY-= 1;
                document.getElementById("player").style.top = persoTop + "px";
            }
        } else if(nomTouche == "ArrowDown") {
            if(collideDetector(persoX, persoY+1) == true) {
                persoTop+=speed;
                persoY+= 1;
                document.getElementById("player").style.top = persoTop + "px";
            }
        } else if(nomTouche == "ArrowRight") {
            if(collideDetector(persoX+1, persoY) == true) {
                persoLeft+=speed;
                persoX+= 1;
                document.getElementById("player").style.left = persoLeft + "px";
            }
        } else if(nomTouche == "ArrowLeft") {
            if(collideDetector(persoX-1, persoY) == true) {
                persoLeft-=speed;
                persoX-= 1;
                document.getElementById("player").style.left = persoLeft + "px";
            }
        }

    }
}, false);

