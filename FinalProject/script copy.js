const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");

let frase = "";


function GetText(){

    const input = document.getElementById("text_input").value.toLowerCase();

    letras = input.split("");

};

function Criptografar(){

    const chave = {
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat",
    }

    GetText()

    letras.forEach(letra => {

        if(letra != " "){
           if(letra in chave){
                frase += chave[letra];
           }

           else{
                frase += letra;
           }
        }
        
        console.log(frase);
    });

    if(frase != ""){

        noresult.innerHTML = "";

        result.innerHTML = frase;
    }

    frase = "";
};

function Descriptografar(){

    const chave = {
        "ai" : "a",
        "enter" : "e",
        "imes" : "i",
        "ober" : "o",
        "ufat" : "u",
    }

    GetText()

    letras.forEach(letra => {

        if(letra != " "){
           if(frase in chave){
                frase += chave[letra];
           }

           else{
                frase += letra;
           }
        }
        
        console.log(frase);
    });

    if(frase != ""){

        noresult.innerHTML = "";

        result.innerHTML = frase;
    }

    frase = "";
};