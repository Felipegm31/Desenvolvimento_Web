// Função básica com retorno.
function soma (a, b){
    return a + b;
};  

// Entrada de argumentos da função soma declarada acima, (1 e 2).
// console.log imprimindo a saída da função.
// atribuindo uma função a uma variável constante.
const resultado_da_soma = soma(1, 2);
console.log(resultado_da_soma);

// Objeto com funções
const cachorro = {
    nome: "Pingo",
    idade: 3,
    // Função dentro de um objeto.
    som: function(){
        console.log("Au Au!")
    }
};

console.log(cachorro.som);

// executando uma função arrow function com temporizador (setTimeOut) após 2 segundos 
setTimeout(() => {console.log("vrummmm!");},2000);

// x


