alert("Boas vindas ao jogo do numero secreto!");

let chute = prompt("Escolha um numero entre um 0 e 30"); 
let numeroSecreto = 365;

if(chute == numeroSecreto){
    alert(`Parabéns voce descobriu o numero secreto que é:  ${numeroSecreto}`);
} 

else{
    alert("Voce errou tecle F5 e tente novamente!")
}