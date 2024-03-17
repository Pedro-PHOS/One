const result = document.getElementById("result");

const alfabeto = [' ','a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let numero = 0;

let frase = "";


function Click(){
    const input = document.getElementById("inputText").value.toLowerCase();

    letras = input.split("");

    letras.forEach(element => {

        function encript(){

            if(element != alfabeto[0]){
                 while (element != alfabeto[numero]){

                    numero += 1;
            
                    if(numero >= 26){
                        numero = 0;
                        break
                    }
                }

                if(numero >= 14){
                    numero -= 13;
                }

                else{
                    numero += 13;
                };
            }

            console.log(alfabeto[numero]);
            frase += alfabeto[numero];

            numero = 0;
        }

        encript();
    });

    result.innerHTML = frase;

    frase = ""
}