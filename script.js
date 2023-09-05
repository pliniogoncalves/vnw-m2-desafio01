/* Desafio 01 - Estrutura de Dados, Funções e Condições */

// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
console.log("\n01 - Resposta:");
console.log("\n");

function verificar(condicao) {
    if(condicao === "de dia")return console.log('claro');
    return console.log('de noite');
}

let dia = "de dia";
verificar(dia);

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
console.log("\n02 - Resposta:");
console.log("\n");

for(let i=2; i<=20; i++){
    if(i%2==0)console.log(i);
} 

// 03 - crie uma função que exiba uma mensagem no console
console.log("\n03 - Resposta:");
console.log("\n");

function mensagem(){
    return console.log("uma mensagem no console");
}

mensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
console.log("\n04 - Resposta:");
console.log("\n");

function exibirNome(nome){
    console.log("Nome: "+ nome);
}

exibirNome("Plinio Gonçalves");

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
console.log("\n05 - Resposta:");
console.log("\n");

function exibirNomeIdadeMusica(nome, idade, estiloMusical){
    console.log(`Nome: ${nome} \nIdade: ${idade} \nEstilo Musical: ${estiloMusical}`);
}

exibirNomeIdadeMusica("Plinio",28,"Pagode e Forró");

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
console.log("\n06 - Resposta:");
console.log("\n");

function exibirFilmeMusica(filme, musica){
    console.log(`Filme: ${filme} \nMúsica: ${musica}`);
}

exibirFilmeMusica("Vingadores","Chorei na Vaquejada");

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
console.log("\n07 - Resposta:");
console.log("\n");

function triplo(numero){
    return console.log(`O triplo de ${numero} é ${numero*3}`);
}

triplo(10);

// 08 - crie uma função que  verifique se uma  variável é true ou false
console.log("\n08 - Resposta:");
console.log("\n");

let variavel = false;

function testeVariavel(){
    if(variavel)return console.log(variavel);
    
    return console.log(variavel);
}

testeVariavel();

// 09 - Crie um array que receba 5 itens e exiba no console.
console.log("\n09 - Resposta:");
console.log("\n");

let itens = ["Item 1","Item 2","Item 3","Item 4","Item 5"];
console.log(itens);


// 10 - Utilize um método para adicionar um nome ao inicio do array.
console.log("\n10 - Resposta:");
console.log("\n");

let nomes = ["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5"];
console.log(nomes);

nomes.unshift("Nome 0");
console.log(nomes);

// 11 - Utilize um método para remover o último nome do array.
console.log("\n11 - Resposta:");
console.log("\n");

console.log(nomes);

nomes.pop();
console.log(nomes);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
console.log("\n12 - Resposta:");
console.log("\n");

console.log(nomes);

nomes.push("Nome 5", "Nome 6");
console.log(nomes);

// 13 - Utilize um método para remover o primeiro nome do array.
console.log("\n13 - Resposta:");
console.log("\n");

console.log(nomes);

nomes.shift();
console.log(nomes);


// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]
console.log("\n14 - Resposta:");
console.log("\n");

let numbers = [7,5,6,3,8,9,2,1,4];
console.log(numbers);

numbers.sort();
console.log(numbers)


// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
console.log("\n15 - Resposta:");
console.log("\n");

let pessoa = {
    nome: "Plinio",
    idade: 28,
    Cidade: "Fortaleza"
}

console.log(pessoa);

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
console.log("\n16 - Resposta:");
console.log("\n");

console.log(pessoa);
pessoa.profissao = "Programador";
console.log(pessoa);

// 17 - Remova uma propriedade desse objeto.
console.log("\n17 - Resposta:");
console.log("\n");

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

// 18 - Mostre no console todas as propriedades desse objeto.
console.log("\n18 - Resposta:");
console.log("\n");

console.log(pessoa);

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
console.log("\n19 - Resposta:");
console.log("\n");

let cadastro = [
    {
        nome:"Nome 1",
        idade:"21",
        telefone:"1111-1111",
        amigos:["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4"]
    },
    {
        nome:"Nome 2",
        idade:"22",
        telefone:"2222-2222",
        amigos:["Amigo 5", "Amigo 6", "Amigo 7", "Amigo 8"]
    },
    {
        nome:"Nome 3",
        idade:"23",
        telefone:"3333-3333",
        amigos:["Amigo 9", "Amigo 10", "Amigo 11", "Amigo 12"]
    },
    {
        nome:"Nome 4",
        idade:"24",
        telefone:"4444-4444",
        amigos:["Amigo 13", "Amigo 14", "Amigo 15", "Amigo 16"]
    },
    {
        nome:"Nome 5",
        idade:"25",
        telefone:"5555-5555",
        amigos:["Amigo 17", "Amigo 18", "Amigo 19", "Amigo 20"]
    }
]

cadastro.forEach(function(pessoa) {
    console.log("Nome: " + pessoa.nome);
    console.log("Idade: " + pessoa.idade);
    console.log("Telefone: " + pessoa.telefone);
    console.log("Amigos: " + pessoa.amigos.join(", "));
    console.log("\n");
});

// 20 - Mostre no console o nome de um amigo de cada lista.
console.log("\n20 - Resposta:");
console.log("\n");

cadastro.forEach(function(pessoa) {
    if (pessoa.amigos.length > 0)console.log(`${pessoa.nome} tem um amigo chamado ${pessoa.amigos[0]}`);
});