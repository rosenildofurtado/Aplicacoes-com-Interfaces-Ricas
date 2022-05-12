//Construa uma aplicação JavaScript para rodar fora do Browser que leia um número e escreva se esse número é divisível por 2.
process.stdin.on('readable', ()=>{ 
    // reads what is being typed. 
    let numero = process.stdin.read(); 
    // trying to read 
    
    numero = numero.toString().replace(/\n/, ""); 
    numero = numero.replace(/\r/, ""); 
    if(numero%2 == 0){
        console.log(numero + ' é divisível por 2');
    }else{
        console.log(numero + ' nãoé divisível por 2');
    }
});
  