let data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();



enviarDados.addEventListener('click', enviar);
email.addEventListener('change', verificarEmail);



function CheckDate(date) {

    var expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/(19|20)?\d{2}$/;
    var aRet = true;

    if ((pObj) && (date.value.match(expReg)) && (date.value != '')) {
  