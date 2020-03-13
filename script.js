var roads = ["case12", "case22", "case32", "case42", "case44", "case52", 
            "case53","case54", "case64", "case74", "case83", "case84", 
            "case85", "case86", "case96", "case106"];

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
            console.log("UP");
        } else if(nomTouche == "ArrowDown") {
            console.log("DOWN");
        } else if(nomTouche == "ArrowRight") {
            console.log("RIGHT");
        } else if(nomTouche == "ArrowLeft") {
            console.log("LEFT");
        }
    }
}, false);

