alert("Boas vindas ao jogo do numero secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute; 
let tentativas = 1;

while(chute != numeroSecreto){
        chute = prompt(`Escolha um numero entre um 1 e ${numeroMaximo}`); 
        if(chute == numeroSecreto){
            break;            
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
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';         
        alert(`Parabéns voce descobriu o numero secreto que é:  ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

       /* if(tentativas > 1){
        alert(`Parabéns voce descobriu o numero secreto que é:  ${numeroSecreto} com ${tentativas} tentativas`);
        }
        else{
            alert(`Parabéns voce descobriu o numero secreto que é:  ${numeroSecreto} com ${tentativas} tentativa`);
        }*/