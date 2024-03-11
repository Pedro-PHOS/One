let numerosecreto = parseInt(Math.random() * 5);

alert(numerosecreto);

let chute

let tentativas = 1;

while (chute != numerosecreto){
    chute = prompt("Escolha um numero de 1 ha 5")

    if (chute == numerosecreto){
        alert(`Você acetrou o numero secreto que é ${numerosecreto}`)
    }

    else{
        alert("Você errou, tente novamente.")
        alert(`Você fez ${tentativas} tentativas`)
    }

    tentativas++
};
// código omitido
