
function calcularIdade(dataNascimento) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascimento = dataNascimento.getFullYear();
    var idade = anoAtual - anoNascimento;
  
    var mesAtual = dataAtual.getMonth() + 1;
    var mesNascimento = dataNascimento.getMonth() + 1;
  
    if (mesAtual < mesNascimento) {
      idade--;
    } else if (mesAtual == mesNascimento) {
      var diaAtual = dataAtual.getDate();
      var diaNascimento = dataNascimento.getDate();
  
      if (diaAtual < diaNascimento) {
        idade--;
      }
    }
  
    return idade;
  }
  
  // Exemplo de uso:
  var dataNascimento = new Date('1989-11-02'); // Substitua com sua data de nascimento
  var idade = calcularIdade(dataNascimento);
  console.log('Tenho ' + idade + ' anos');