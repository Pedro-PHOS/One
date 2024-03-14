const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");

const btn_copy = document.getElementById("div_copiar");

let frase = "";

function end(final){
    if(final != ""){
        noresult.style.display = "none";
        result.style.display = "flex";

        result.innerHTML = final;

        btn_copy.style.display = "flex";
    }
    frase = "";
};

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

    end(frase)
};

function Descriptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    descripto = input
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        end(descripto)
};

function Copiar() {
    navigator.clipboard.writeText(result.innerHTML);
};