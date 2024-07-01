function contagemProgressiva(numero) {
    let contador = 0;
    while (contador <= numero) {
      alert(contador);
      contador++;
    }
  }  
  
  let numeroUsuario = prompt("Digite um número para a contagem regressiva:");
  
  contagemProgressiva(numeroUsuario);
  