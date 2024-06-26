alert("Boas vindas ao jogo do numero secreto!");
let chute; 
let numeroSecreto = 5;
let tentativas = 1;

while(chute != numeroSecreto){
        chute = prompt("Escolha um numero entre um 0 e 30"); 
        if(chute == numeroSecreto){
            alert(`Parabéns voce descobriu o numero secreto que é:  ${numeroSecreto} com ${tentativas} tentativas`);
        } 
        
        else{
            if(numeroSecreto > chute){
            alert(`Voce errou o numero secreto é maior que ${chute}`);
            }
            else{
                alert(`Voce errou o numero secreto é menor que ${chute}`);
            }
            tentativas+=1;
        }
    }