//Aula 1: Variaveis

console.log("Hello World!") // isso printa

let string = 'abcd123'; //'let' cria a variavel
let constant = 25;
let bolean = true;
let sobrenome = undefined;
let corSelecionada = null;

console.log(string,constant,bolean)
//Fim

//Aula 2: Objetos
let pessoa = { //{} Cria objetos
    nome: 'Luiz Eduardo', //'variavel:' >é o atributo do obj
    sobrenome: 'Vilaça Mosciaro',
    idade: 29,
};

console.log(pessoa);
//Fim

//Aula 3: Arrays
let familia = [29, 68, 27, 'Edu'];

console.log(familia); //printa toda array
console.log(familia[3]); // printa o indice 3 de familia
console.log(familia.length); //printa o numero de indices da array
//Fim

//Aula 4: Funções
//Segue-se o padrão de VERBO+SUBSTANTIVO para nomear
// Exemplo: function resetaCor ou function limpaNome
let corSite = 'azul';
function resetaCor(){
    corSite = '';
}

console.log(corSite); //printa a cor
resetaCor();          //zera a corSite
console.log(corSite); //printa ele após zerar

let corSite2 = 'azul'
function resetaCor2(cor,tonalidade){ //aqui eu digo que resetaCor2 recebe a variavel cor
    corSite2 = cor +' '+ tonalidade //aqui eu digo que a variavel corSite2 que é azul, virará a 'cor' que for escrita em resetaCor(cor)  
}

console.log(corSite2) //é azul
resetaCor2('cinza','claro')     //digo que vai ser cinza
console.log(corSite2) //virou cinza
//Fim

//Aula 5: Tipo de Funções
//a - Faz uma tarefa, não devolve nada
function dizerNome(){
    console.log("Luiz")
}

dizerNome()
//b - Faz uma tarefa e retorna algo
function multiplicarPorDois(valor){
    return valor*2
}

console.log(multiplicarPorDois(5))
//ou
let resultado = multiplicarPorDois(5)
console.log(resultado)
//Fim

//Aula 6: Operadores

//Operadores Aritmeticos: +, -, /, *, ** 
let salario = 100

console.log(salario + salario)
console.log(salario - salario)
console.log(salario / salario)
console.log(salario * salario)
console.log(salario ** salario) //exponencial

//++ --
let idade = 10
++idade //adiciona +1
idade-- //retira 1
console.log(idade)
console.log(++idade) //ou
console.log(idade--)

//Operador de Atribuição += ou qualquer operação aritmetica
console.log(idade += idade, idade -= idade)

//Operador de Igualdade = / == / ===
console.log( x = 1) //atribui
console.log( 1 == 1) //verifica se sao iguais e retorna true ou false
console.log( 1 === 1) // idem acima e checa o datatype se é igual
console.log( 1 === '1') // vai dar false

//Operador Ternario '?'
let pontos = 150
let tipo = pontos > 100 ? 'premium' : 'comum' //Ou seja: se maior que cem, retorna 'premium' e se não retorna 'comum'
console.log(tipo)

//Operador Logico '&&'
console.log(true && true)  //tem que retornar true
console.log(true && false)//tem que retornar false

let maiorDedIdade = true
let possuiCnh = true
let podeAplicar = maiorDedIdade && possuiCnh
console.log(podeAplicar)

//Operador Logico  'ou' '||'
let maiorDedIdade2 = true
let possuiCnh2 = false
let podeAplicar2 = maiorDedIdade2 || possuiCnh2
console.log(podeAplicar2)

//Operador NOT (!)
let passou = true
console.log('Voce passou? ',!passou) //retornará false, pq nega o true


 


