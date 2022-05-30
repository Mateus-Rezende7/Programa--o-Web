
var dataAtual = new Date();
var dia = atualDate.getDate();
var mes = atualDate.getMonth();
var ano = atualDate.getFullYear();

botao = document.querySelector('.btn-login');
form = document.querySelector('.main-login');
form.addEventListener('submit', validarNomeEmail);nome = document.querySelector('#nome');
email = document.querySelector("#email");
data = document.querySelector("#dataData");


        

function validarNomeEmail(e){
    e.preventDefault();
    

    if (nome.value === ""){
        alert("Nome não informado")
    }
     
     if (email.value ===""){
        alert("E-mail não informado")
          
     }

     if(dataNascimento.value ==="")
     alert("Informa data de nascimento")
     
     {}
}

form.addEventListener('submit', validarEmailData);

function validarEmailData() {
    var dataNacimento = new RegExp(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/);
    var emailUsuario = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

    if (!dataNacimento.test(data.value)){
        var aviso = document.createElement('p');
        aviso.className = 'aviso';
        aviso.innerHTML = 'Por favor, digite a data no formato: dd/mm/aaaa';
        form.appendChild(aviso);
        setTimeout(() => aviso.innerHTML = '', 3000) 

    }
    
    if (!emailUsuario.test(email.value)){
        var aviso2  = document.createElement('p');
        aviso2.className = 'aviso2'
        aviso2.innerHTML = 'Por favor, digite o email no formato: email@dominio.com';
        form.appendChild(aviso2);
        setTimeout(() => aviso2.innerHTML = '', 3000) 
}
}

form.addEventListener('submit', maiorIdade);
function maiorIdade(){
if (ano - fixedUserAge.getFullYear() < 18) {
    let menor = document.createElement('p');
    noBirthday.appendChild(menor);

    menor.classList.add('error');
    menor.innerText = 'Menores de 18 anos não podem ser adicionados';
    setTimeout(() => notEnoughAge.remove(), 3000);
    formClear(1);
}
}