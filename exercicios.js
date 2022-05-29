//Exercicio 1
//If..Else

//Se hora entre 6am e 12pm: Bom dia!
//Se hora entre 12pm e 18pm: Boa tarde!
//Caso contrario: Boa noite!

let hora = 11

if (hora > 6 && hora < 12){
    console.log("Bom dia")
}
else if (hora > 12 && hora < 18){
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}

//Exercicios 2
//Switch case

let permissao //usuario comum,gerente,diretor
permissao = 'invalido'

switch (permissao) {
    case 'comum':
        console.log('Usuario comum')
        break;
    
    case 'gerente':
        console.log('Usuario gerente')
        break;
    
    case 'diretor':
        console.log('Usuario diretor')
        break;

    default:
        console.log('Usuario não encontrado')
        break;
}

//Exercicios 3
//Laço/Loop/For 
// 1.For 2.While 3.Do..while 4.For..In 5.For..of

//1.For
for (let i = 0; i <= 5; i++){ //variavel, condição, incremento
    console.log('Estou aprendendo:', i)
    if (i % 2 !== 0){ //% é para verificar o resto (operador modules)
        console.log(i)
    }
}

//2.While
let i = 2
while (i >= 5){
    if (i % 2 !== 0){
        console.log(i)
        i++
    }
    else{
        break
    }
}

//3.Do..while
let x = 0
do{
    console.log('Typing')
    x++
} while (x < 10)

//4.For..In
const pessoa = {
    nome: 'Luiz',
    idade: 29
}
for (let chave in pessoa) {
    console.log(chave)
}

const cores = ['Red','Blue','Green']
for (indice in cores){
    console.log(indice,cores[indice])
}

//5.For-of
for (cor of cores){ //'in' vai pegar o indice, 'of' vai pegar o valor da chave
    console.log(cor)
}

//Exercicios 4
//Faça uma função que verifique o maior entre dois numeros e retorne o maior
let numeroUm = 7
let numeroDois = 3 

function maiorNumero(a,b){
    if (a > b){
        return a
    }
    else if (b > a){
        return b
    }
    else{
        console.log('São iguais')
    }
}
console.log(maiorNumero(numeroUm,numeroDois))

//Exercicio 5, função Fizzbuzz
//Se divisivel por 3 >> fizz
//Se divisivel por 5 >> buzz
//Se divisivel por 3 e 5 >> fizzbuzz
//Nao divisivel por 3 nem 5 >> repete o numero de entrada
//Nao é numero >> "Não é numero"

const resultad = fizzBuzz(15)
console.log(resultad)

function fizzBuzz(entrada){
    if (typeof entrada != 'number')
        return 'Não é um numero'

    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'fizzbuzz'

    if (entrada % 3 === 0)
        return 'fizz'
    
    if (entrada % 5 === 0)
        return 'buzz'
    
}
  
