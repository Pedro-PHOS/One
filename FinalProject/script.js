const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");

const div_copy = document.getElementById("div_copy");

let frase = "";

function Show(funcao){
    if(funcao != ""){
        noresult.style.display = "none";
        result.style.display = "flex";

        result.innerHTML = funcao;

        div_copy.style.display = "flex";
    }

    else{
        noresult.style.display = "flex";
        result.style.display = "none";
        div_copy.style.display = "none";
    };

    frase = "";
};

function Criptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    letras = input.split("");

    letras.forEach(letra => {

        if(letra != " "){
            switch (letra){
                case "a":
                    letra = "ai"
                    break

                case "e":
                    letra = "enter"
                    break

                case "i":
                    letra = "imes"
                    break

                case "o":
                    letra = "ober"
                    break
                
                case "u":
                    letra = "ufat"
                    break
            }
        }

        frase += letra;
        console.log(frase);
    })

    Show(frase)
};

function Descriptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    descripto = input
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        Show(descripto)
};

function Copiar() {
    navigator.clipboard.writeText(result.innerHTML);
};