//Selectores

let palabras = ["ALURA","ONE","HTML","JAVASCRIPT","ORACLE"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras= [];
let errores= 8;

//Funcion para palabra seleccionar palabra secreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function combrobarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        console.log(key)
        return estado
    }else{
        estado = true
        console.log(key)
        return estado
    }
}

function anadirLetraIncorrecta(){
    errores -= 1
    console.log(errores)
}


//Funcion para iniciar juego
function iniciarJuego(){
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("div-aparece-ahorcado").style.display = "block";
    
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()

        if(combrobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i)
                }
            }
        }else{
            anadirLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores)
        }
    }
}

