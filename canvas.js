function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A83871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(550, 500);
    tablero.lineTo(800, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    let anchura = 600/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(400 + (anchura*i), 640)
        tablero.lineTo(450 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";

    let anchura = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 400+(anchura*index),620)
    tablero.stroke()

}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";
    tablero.fillText(letra, 400+(40*(10-errorsLeft)), 710,40)
}