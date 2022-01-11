/*
    Descrição: Atividade 2 da disciplina Lógica de Programação do Curso PFE/2021 - Turma 3 - SENAI.
               Essa atividade foi conduzida pela  professora Jéssica no Encontro Remoto 2.
    Objetivo: Testar conhecimentos de Lógica de Programação, para um simulado
              sistema de contagem de peças, no máximo 10, aplicando a LP JavaScript, com seus códigos
              mais fundamentais, tais como: tipos de variáveis, estrutura condicional e
              uma estrutura de repetição mais adequada ao propósito da atividade.
*/

//Estrutura de dados array, inicializada com cinco elementos, com nomes/itens conhecidos e
//com capacidade para conter no máximo 10 itens. 
var arrayListaDePecas = ["Jogo de Velas", "Junta de Cabeçote", "Radiador do Motor",
                         "Filtro de Ar", "Amortecedor Dianteiro"];

var limiteDePecas = 10,
    pesoMinimoDaPeca = 60,
    nomeDePecaMinimo = 5,
    contaPecas = 0,
    pesoDaPeca;


contaPecas = arrayListaDePecas.length;

 
 /*
//Adicionando uma peça e testando os padrões: 
// 1 - Número de caracteres do nome, no mínimo 5; 
// 2 - Peso, no mínimo 50Kg e
 / 3 - Quantidade, no máximo 10
*/

console.log(arrayListaDePecas);
arrayListaDePecas.push("Carburador");
pesoDaPeca = 120;

if ((arrayListaDePecas[contaPecas - 1].length) <= nomeDePecaMinimo )
{
    console.log("Nome da peça está fora dos padrões. O nome tem que ter, no mínimo " + nomeDePecaMinimo + " caracteres.");
}
else if (pesoDaPeca < pesoMinimoDaPeca )
     {
        console.log("Esta peça tem um peso de "  + pesoDaPeca + "Kg. O peso mínimo é de " + pesoMinimoDaPeca + "Kg.");
     }
     else if (contaPecas <= limiteDePecas)
          {
              console.log("O item " + arrayListaDePecas[contaPecas] + " foi cadastrado.");
              console.log(arrayListaDePecas);
              contaPecas++;
          }
          else
          {
              console.log("Não há mais espaço para cadastrar nehum outro item");
          } 
 