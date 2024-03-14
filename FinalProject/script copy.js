const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");

const btn_copy = document.getElementById("div_copiar");

let frase = "";


function Criptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    letras = input.split("");

    letras.forEach(letra => {

        if(letra != " "){
            if(letra == "a"){
                letra = "ai"
            }

            if(letra == "e"){
                letra = "enter"
            }

            if(letra == "i"){
                letra = "imes"
            }

            if(letra == "o"){
                letra = "ober"
            }

            if(letra == "u"){
                letra = "ufat"
            }
        }

        frase += letra;
        console.log(frase);
    })

    noresult.style.display = "none";
    result.style.display = "flex";

    result.innerHTML = frase;

    btn_copy.style.display = "flex";
};

function Descriptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    descripto = input
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if(descripto != ""){

        noresult.style.display = "none";
        result.style.display = "flex";

        result.innerHTML = descripto;

        btn_copy.style.display = "flex";
    }
};

function copiar() {
    navigator.clipboard.writeText(result.innerHTML);
  }