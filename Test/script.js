window.onload = function() {
    var universe = document.querySelector(".universe-background");

    var starCount = 500; // Define a quantidade de estrelas

    for (var i = 0; i < starCount; i++) {
        var star = document.createElement("div");
        star.classList.add("star");
        universe.appendChild(star);

        // Gera valores aleatórios para top e left
        var randomTop = Math.floor(Math.random() * window.innerHeight); // Gera um valor aleatório para a posição superior dentro da janela
        var randomLeft = Math.floor(Math.random() * window.innerWidth); // Gera um valor aleatório para a posição esquerda dentro da janela

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
