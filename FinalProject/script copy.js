const result = document.getElementById("result");

const noresult = document.getElementById("div_noresult");


function Criptografar(){

    const input = document.getElementById("text_input").value.toLowerCase();

    cripto = input
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    if(cripto != ""){

        noresult.innerHTML = "";

        result.innerHTML = cripto;
    }
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

        noresult.innerHTML = "";

        result.innerHTML = descripto;
    }
};