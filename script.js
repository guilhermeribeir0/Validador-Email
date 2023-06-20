function validaEmail(email) {
  var padraoEmail = /^[\w._-]+@[\w_.-]+\.[\w]{2,}/i;
  if (padraoEmail.test(email)) {
      return true;
  } else {
      return false;
  }
}

function validacao() {
  var email = document.getElementById('email').value;

  var resultadoValidacao = validaEmail(email);

  document.getElementById('sucesso').style.display = 'none';
  document.getElementById('erro').style.display = 'none';

  if (resultadoValidacao == true) {
      document.getElementById('sucesso').style.display = 'block';
  } else {
      document.getElementById('erro').style.display = 'block';
  }
}