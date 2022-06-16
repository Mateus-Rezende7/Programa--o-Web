var nome = document.getElementById("name");
var email = document.getElementById("email");
var dataNascimento = document.getElementById("dataNascimento");
var form = document.getElementById('formulario');
var users = document.getElementById('users');
var deletar = document.getElementById('excluir')

botao = document.querySelector('.btn-login');
form = document.querySelector('.main-login');
nome = document.querySelector('#nome');
email = document.querySelector("#email");
data = document.querySelector("#dataData");

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano4 = data.getFullYear();
var str_data = dia + '/' + (mes + 1) + '/' + ano4;

form.addEventListener('submit', validarNomeEmail);

function validarNomeEmail(e) {
    e.preventDefault();


    if (nome.value === "") {
        alert("Nome não informado")
    }

    if (email.value === "") {
        alert("E-mail não informado")

    }

    if (dataNascimento.value === "")
        alert("Informa data de nascimento")

    {}
}

form.addEventListener('submit', validarEmailData);

function validarEmailData() {
    var dataNacimento = new RegExp(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/);
    var emailUsuario = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);

    if (!dataNacimento.test(data.value)) {
        var aviso = document.createElement('p');
        aviso.className = 'aviso';
        aviso.innerHTML = 'Por favor, digite a data no formato: dd/mm/aaaa';
        form.appendChild(aviso);
        setTimeout(() => aviso.innerHTML = '', 3000)

    }

    if (!emailUsuario.test(email.value)) {
        var aviso2 = document.createElement('p');
        aviso2.className = 'aviso2'
        aviso2.innerHTML = 'Por favor, digite o email no formato: email@dominio.com';
        form.appendChild(aviso2);
        setTimeout(() => aviso2.innerHTML = '', 3000)
    }
}