var carLocations = [-160, -1000, -1900, -2400, -3100, -4000, -4700, -5200, -6000, -6800, -7800, -8900, -9400, -10400, -11300, -12100, -13000, -14200, -15000, -16100, -17400, -18100, -19000, -20200, -21300, -22400, -23500, -24700, -25500, -26700, -24500, -25400, -26600, -27500, -28600, -29500, -30600, -31700];
//var carLocations2 = [-1000, -4900, -9100, -13400, -17600, -21800, -26300];
//var carLocations3 = [-1900, -5800, -11300, -15700, -19800, -23900];
//var carLocations4 = [-2900, -6900, -12500, -16800, -20900, -25000];



function keyboardInput(event) {
    if (event.key == "m") {
        startingBgMusic.play();
    }

    if (event.key == "Enter") {
        gameStart();

    }


    if(gameOverSignal == 0){
        if(pauseFunctionNumber == true){
        if (event.key == "ArrowRight") {
        if (carPositionMoveRightWorkerNumber == 0) {
            carPositionMoveRight();
        }
    }

    if (event.key == "ArrowLeft") {
        if (carPositionMoveLeftWorkerNumber == 0) {
            carPositionMoveLeft()
        }
    }
}
    if (event.key == " ") {
        pauseContinue();
    }
}

}


var gameBgMusic = new Audio("Audio/gameBgMusic.mp3");
var startingBgMusic = new Audio("Audio/startingMusic.mp3");
startingBgMusic.volume = 0.4;
var startingDelayWorkerNumber = 0;
var startingDelayNumber = 0;
function gameStart() {
    if (backgroundWorkerNumber == 0) {
        startAllMinorCars();
        scoreDelay();
        startingBgMusic.pause();
        gameBgMusic.play();
        scoreBoxFader();
        document.getElementById("startingScreen").style.opacity = "0";
        moveBackground();
        startingDelayWorkerNumber = setInterval(() => {
            document.getElementById("startingScreen").style.display = "none";
            startingDelay = startingDelay + 1;
            if (startingDelayNumber == 1) {
                clearInterval(startingDelayWorkerNumber);
            }
        }, 600);


    }

}

var scoreBoxFaderNumber = 0;
var scoreBoxFaderWorkerNumber = 0;
function scoreBoxFader() {
    scoreBoxFaderWorkerNumber = setInterval(() => {
        document.getElementById("scoreBox").style.opacity = "60%";
        scoreBoxFaderNumber = scoreBoxFaderNumber + 1;
        if (scoreBoxFaderNumber == 1) {
            clearInterval(scoreBoxFaderWorkerNumber);
        }

    }, 600);
}

var currentScore = 0;
var scoreWorkerNumber = 0;
function scoreUpdate() {

    scoreWorkerNumber = setInterval(() => {
        currentScore = currentScore + 20;
        document.getElementById("score").innerHTML = currentScore;
        if(currentScore == 5000){
            document.getElementById("gameOverText").innerHTML = "You Won";
            gameOverSignal = 1;
            gameOverScreenFader();
        }
    }, 500);
}


var scoreDelayWorkerNumber = 0;
var scoreDelayNumber = 0;
function scoreDelay() {
    scoreDelayWorkerNumber = setInterval(() => {
        scoreUpdate();

        scoreDelayNumber = scoreDelayNumber + 1;
        if (scoreDelayNumber == 1) {
            clearInterval(scoreDelayWorkerNumber);
        }
    }, 800);
}

var carPositionNumberRight = 0;
var carPositionX = 500;
var carPositionMoveRightWorkerNumber = 0;
function carPositionMoveRight() {
    if (carPositionX != 900) {
        carPositionMoveRightWorkerNumber = setInterval(() => {
            carPositionX = carPositionX + 10;
            carPositionNumberRight = carPositionNumberRight + 1;
            document.getElementById("mainCar").style.marginLeft = carPositionX + "px";
            if (carPositionNumberRight == 20) {
                clearInterval(carPositionMoveRightWorkerNumber);
                carPositionMoveRightWorkerNumber = 0;
                carPositionNumberRight = 0;
            }

        }, 10);

    }
}

var carPositionX = 500;
var carPositionNumberLeft = 0;
var carPositionMoveLeftWorkerNumber = 0;
function carPositionMoveLeft() {
    if (carPositionX != 300) {
        carPositionMoveLeftWorkerNumber = setInterval(() => {
            carPositionX = carPositionX - 10;
            carPositionNumberLeft = carPositionNumberLeft + 1;
            document.getElementById("mainCar").style.marginLeft = carPositionX + "px";
            if (carPositionNumberLeft == 20) {
                clearInterval(carPositionMoveLeftWorkerNumber);
                carPositionMoveLeftWorkerNumber = 0;
                carPositionNumberLeft = 0;
            }


        }, 10);

    }

}

var backgroundImagePosition = 0;
var backgroundWorkerNumber = 0;
function moveBackground() {
    backgroundWorkerNumber = setInterval(() => {
        document.getElementById("background").style.backgroundPositionY = backgroundImagePosition + "px";
        backgroundImagePosition = backgroundImagePosition + 2;
    }, 20);

}



function startAllMinorCars() {
    carLocations.forEach(generateCarsTrack1);
    carLocations.forEach(generateCarsTrack2);
    carLocations.forEach(generateCarsTrack3);
    carLocations.forEach(generateCarsTrack4);
}




var minorCarMoveWorkerNumber1 = 0;
function generateCarsTrack1(x) {
    var i = document.createElement("img");
    i.src = "Images/car1.png";
    i.className = "minorCar";
    i.style.marginLeft = "300px"
    i.style.marginTop = x + "px";
    document.getElementById("background").appendChild(i);

    if (backgroundWorkerNumber == 0) {
        minorCarMoveWorkerNumber1 = setInterval(() => {
            if (carPositionX == 300) {
                if (backgroundWorkerNumber != 0) {
                    if (x > 320 && x < 590) {
                        gameOver();
                     
                            
                    }
                }
            }


            x = x + 2;
            i.style.marginTop = x + "px";

        }, 13);
    }

}

var minorCarMoveWorkerNumber2 = 0;
function generateCarsTrack2(y) {
    y = y - 1000;
    var j = document.createElement("img");
    j.src = "Images/car2.png";
    j.className = "minorCar";
    j.style.marginLeft = "500px"
    j.style.marginTop = y + "px";
    document.getElementById("background").appendChild(j);

    minorCarMoveWorkerNumber2 = setInterval(() => {
        if (carPositionX == 500) {
            if (backgroundWorkerNumber != 0) {
                if (y > 320 && y < 590) {
                    gameOver();
                }
            }
        }

        y = y + 2;
        j.style.marginTop = y + "px";

    }, 13);
}

var minorCarMoveWorkerNumber3 = 0;
function generateCarsTrack3(z) {
    z = z - 600;
    var k = document.createElement("img");
    k.src = "Images/car3.png";
    k.className = "minorCar";
    k.style.marginLeft = "680px";
    k.style.marginTop = z + "px";
    document.getElementById("background").appendChild(k);

    minorCarMoveWorkerNumber3 = setInterval(() => {
        if (carPositionX == 700) {
            if (backgroundWorkerNumber != 0) {
                if (z > 320 && z < 590) {
                    gameOver();
                }
            }
        }

        z = z + 2;
        k.style.marginTop = z + "px";
    }, 13);

}

var minorCarMoveWorkerNumber4 = 0;
function generateCarsTrack4(h) {
    h = h - 200;
    var l = document.createElement("img");
    l.src = "Images/car1.png";
    l.className = "minorCar";
    l.style.marginLeft = "900px";
    l.style.marginTop = h + "px";
    document.getElementById("background").appendChild(l);

    minorCarMoveWorkerNumber4 = setInterval(() => {
        if (carPositionX == 900) {
            if (backgroundWorkerNumber != 0) {
                if (h > 320 && h < 590) {
                    gameOver();
                }
            }
        }

        h = h + 2;
        l.style.marginTop = h + "px";

    }, 13);


}

var gameOverSignal = 0;
function gameOver() {
    if(pauseFunctionNumber == true){
        gameOverSignal = 1;
        gameOverScreenFader();
        clearInterval(backgroundWorkerNumber);
        gameBgMusic.pause();
        clearInterval(scoreWorkerNumber);
        startingBgMusic.play();
    }
    
    
}

var endScreenFader = 0;
var endScreenFaderWorkerNumber = 0;
function gameOverScreenFader(){
    document.getElementById("gameOverEndScreen").style.display = "flex";
    endScreenFaderWorkerNumber = setInterval(() => { 
      endScreenFader = endScreenFader + 1;
      if(endScreenFader == 1){
        document.getElementById("gameOverEndScreen").style.opacity = "100%";
        clearInterval(endScreenFaderWorkerNumber);
      }
    }, 500);
}


let pauseFunctionNumber = true;
function pauseContinue() {
    if (backgroundWorkerNumber != 0) {
        if (pauseFunctionNumber == true) {
            clearInterval(backgroundWorkerNumber);
            gameBgMusic.pause();
            clearInterval(scoreWorkerNumber);
            startingBgMusic.play();
            scoreWorkerNumber = 0;


        }

        else {
            startingBgMusic.pause();
            gameBgMusic.play();
            moveBackground();
            if (scoreWorkerNumber == 0) {

                scoreUpdate();

            }
        }

        pauseFunctionNumber = !pauseFunctionNumber;
    }

}

function restartGame(){
    window.location.reload();
}