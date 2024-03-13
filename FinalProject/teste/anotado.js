function Descriptografar(){

    GetText();

    const chave = {"a" : 1, "b": 2}

    letras.forEach(letra => {
        if(letra in chave){
            console.log(chave[letra]);
        }
    });

};

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


const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");

let frase = "";




function GetText(){

    const input = document.getElementById("text_input").value.toLowerCase();

    letras = input.split("");

};

function Criptografar(){

    GetText()

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
    });

    if(frase != ""){

        noresult.innerHTML = "";

        result.innerHTML = frase;
    }

    frase = "";
};