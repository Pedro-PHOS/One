const resultElement = document.getElementById("result-text");
const noResultElement = document.getElementById("no-result-section");
const copySection = document.getElementById("copy-section");

let phrase = "";

function showResult(text) {
    if (text !== "") {
        noResultElement.style.display = "none";
        resultElement.style.display = "flex";
        resultElement.innerHTML = text;
        copySection.style.display = "flex";
    } else {
        noResultElement.style.display = "flex";
        resultElement.style.display = "none";
        copySection.style.display = "none";
    }
    phrase = "";
}

function encryptText() {
    const input = document.getElementById("text-input").value.toLowerCase();
    let letters = input.split("");

    letters.forEach(letter => {
        if (letter !== " ") {
            switch (letter) {
                case "a":
                    letter = "ai";
                    break;
                case "e":
                    letter = "enter";
                    break;
                case "i":
                    letter = "imes";
                    break;
                case "o":
                    letter = "ober";
                    break;
                case "u":
                    letter = "ufat";
                    break;
            }
        }
        phrase += letter;
        console.log(phrase);
    });

    showResult(phrase);
}

function decryptText() {
    const input = document.getElementById("text-input").value.toLowerCase();
    const decryptedText = input
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    showResult(decryptedText);
}

function copyText() {
    navigator.clipboard.writeText(resultElement.innerHTML);
}


window.onload = function() {
    var universe = document.querySelector(".universe-background");

    if(window.innerWidth < 800){
        var starCount = 200;
    }

    else{
        var starCount = 800; // Define a quantidade de estrelas
    }

    for (var i = 0; i < starCount; i++) {
        var star = document.createElement("div");
        star.classList.add("star");
        universe.appendChild(star);

        if(Math.random() > 0.3){
            star.style.animation = "twinkle 1s infinite";
        }

        if(Math.random() > 0.6){
            star.style.animation = "twinkle 3s infinite";
        }

        else{
            star.style.animation = "twinkle 2s infinite";
        }

        // Gera valores aleatórios para top e left
        var randomTop = Math.floor(Math.random() * (window.innerHeight -= 0.1)); // Gera um valor aleatório para a posição superior dentro da janela
        var randomLeft = Math.floor(Math.random() * (window.innerWidth -= 0.1)); // Gera um valor aleatório para a posição esquerda dentro da janela

        // Define a posição da div com os valores aleatórios
        star.style.top = randomTop + "px";   // Define a posição superior como o valor aleatório
        star.style.left = randomLeft + "px"; // Define a posição esquerda como o valor aleatório
        
        function getRandomSize(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        size = getRandomSize(1,4);

        star.style.width = size + "px"; // Define a largura aleatoriamente entre 100 e 300 pixels
        star.style.height = size + "px"; // Define a altura aleatoriamente entre 100 e 300 pixels
        
    }
};
