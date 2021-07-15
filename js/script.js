// var colors = ["rgb(245, 176, 65)","rgb(169, 223, 191)", "rgb(123, 36, 28)", "rgb(133, 146, 158)", "rgb(125, 60, 152)", "rgb(204, 209, 209)"];
var colors = [];
var botonReset = document.querySelector("#reset");
var cuadraditos = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay")
var message = document.querySelector("#message");
var h1= document.querySelector("h1");
var easyBoton = document.getElementById("easy");
var hardBoton = document.getElementById("hard");
var numberOfSquares = 6;

function generateRandomColors(arrayColores) {
    arrayColores = [];
    for (let i = 0; i < numberOfSquares; i++) {
        function randomColor(numUno,numDos,numTres) {
            numUno = parseInt(Math.round(Math.random()*255));
            numDos = parseInt(Math.round(Math.random()*255));
            numTres = parseInt(Math.round(Math.random()*255));
            return "rgb(" + numUno + ", " + numDos + ", " + numTres + ")";
        };
        arrayColores[i] = randomColor()
    };
    return arrayColores;
};

function reset() {
    colors = generateRandomColors();
    for (var i = 0; i < numberOfSquares; i++) {
        cuadraditos[i].style.backgroundColor = colors[i];
    };
    function pickColor(numAl) {
        numAl = parseInt(Math.round(Math.random()*(numberOfSquares-1)));
        return numAl
    };
    pickedColor = colors[pickColor()];
    colorDisplay.innerHTML = pickedColor;

    botonReset.addEventListener("click",function(){
        reset()
    });

    // volviendo a las condiciones iniciales
    message.textContent = "";
    h1.style.backgroundColor = "";
    botonReset.innerHTML="New Colors"
}
reset()

for (var i = 0; i < cuadraditos.length; i++) {
        cuadraditos[i].addEventListener("click", function () {
        var clickedColor= this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                message.innerHTML = "Has acertado!";
                botonReset.innerHTML = "Play again!";
                h1.style.backgroundColor = clickedColor;
                for (let i = 0; i < numberOfSquares; i++) {
                    cuadraditos[i].style.backgroundColor = pickedColor
                };
                
            } else {
                this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
                message.innerHTML = "Try again!";
            }
        });
};

easyBoton.addEventListener("click", function easyFun() {
    easyBoton.classList.add("selected");
    hardBoton.classList.remove("selected");
    numberOfSquares = 3;
    reset()

    //con esto ya desaparece el color (funciona)
    for (var i = 3; i < 6; i++) {
        cuadraditos[i].style.display = "none";
    };
});

hardBoton.addEventListener("click", function easyFun() {
    hardBoton.classList.add("selected");
    easyBoton.classList.remove("selected");
    numberOfSquares = 6;
    for (var i = 3; i < numberOfSquares; i++) {
        cuadraditos[i].style.display = "block";
    };
    
    reset()
});