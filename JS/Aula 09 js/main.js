//Crie um array de objetos com quatro objetos 
//e cada objeto tera 4 propriedades
//e retorne o nome de todos os alunos
//Retorne todos os alunos que tirou nota maior que 6
//Retorne o primeiro aluno que tirou nota menor que 5

const alunos= [
    {
    aluno:'Doja Cat',
    nota: 10,
    altura: 160,
    time:'Palmeiras',
},
{
    aluno:'Kendrick Lamar',
    nota:11,
    altura:170,
    time:'Flamengo'
},
{
    aluno:'Tyler',
    nota:4,
    altura:180,
    time:'Botafogo',
},
{
    aluno:'Rihanna',
    nota:2,
    altura:190,
    time:'Santos'
},
]


alunos.forEach((teste) => console.log(teste.aluno))

let filtroNotas = alunos.filter((alunos) => {
    return alunos.nota >= 6;
    });
    console.log(filtroNotas);

    