const colaboradores = [
    {
        nome: 'Luva de pedreiro',
        salario: 5550,
        vinculo: 'CLT'
    },
    {
        nome: 'Lebron james',
        salario: 3100,
        vinculo: 'PJ',
    },
    {
        nome: 'Tyler',
        salario: 4420,
        vinculo: 'CLT',
    },
    {
        nome: 'Clebao',
        salario: 7100,
        vinculo: 'PJ',
    },
    {
        nome: 'Carlao',
        salario: 1000,
        vinculo: 'CLT',
    },
];

const Inss = [
    [0, 1212, 0.075],  
    [1212, 2427, 0.09],  
    [2427, 3641, 0.12],  
    [3641, 7087, 0.14],  
];


var valor = colaboradores[0].salario 
if (colaboradores[0].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}
console.log(`O vinculo do Luva de pedreiro é ${colaboradores[0].vinculo}, e o valor que ele paga de inss é ${Math.trunc(inss)} reias.`)


var valor = colaboradores[1].salario 
if (colaboradores[1].vinculo == "PJ") {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}

else {
    var inss = 0.075 * valor
}
console.log(`O vinculo de Lebron James é ${colaboradores[1].vinculo}, por isso ele não paga inss `)


var valor = colaboradores[2].salario 
if (colaboradores[2].vinculo == "PJ") {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}
console.log(`O vínculo de Tyler é ${colaboradores[2].vinculo}, e o valor que ele paga de inss é ${Math.trunc(inss)} reias.`)


var valor = colaboradores[3].salario 
if (colaboradores[3].vinculo == "PJ") {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}
console.log(`O vinculo de Clebao é ${colaboradores[3].vinculo}, por isso ele não paga inss.`)


var valor = colaboradores[4].salario 
if (colaboradores[4].vinculo == "PJ") {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
} 
if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}
console.log(`O vinculo do Carlao é ${colaboradores[4].vinculo}, o valor que ele paga de inss é ${inss} reias.`);



// Tentei fazer com switchcase mas não consegui 


nome = "Colaboradores";
salario = 10000
  switch(nome){
   case "luva de pedreiro":
     salario *= 0.14;
     break; 
    case "Lebron James":
     pj *= 0;
     break;
    case "tyler":
     salario *= 0.12;
     break;
    case "Clebao":
     salario *= 0.14;
     break;

  }