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

var dataNascimento = new Date('1992-11-01'); // Substitua com sua data de nascimento
var idade = calcularIdade(dataNascimento);
// console.log(idade)

// About

const mostrarTexto = () => {
  const text = document.querySelector('#text');
  const NewP = document.createElement('p');
  NewP.setAttribute('id', 'text');
  const field = document.querySelector('.sobre-text');
  text.innerText = `Olá, meu nome é Tiago, tenho ${idade} anos, sou do estado de Santa Catarina, mais precisamente moro na cidade de Imbituba. Amante da tecnologia e fascinado por livros de ficção fantasia e científica. No começo da minha jornada de trabalho, minha área foi na segurança do trabalho, com objetivo em busca de redução de acidentes. Porém ao me deparar com uma situação, onde precisava de um sistema que poderia me gerenciar e melhorar minha gestão de trabalho. Percebi que precisava de um sistema, onde o meu primeiro contato com a programação foi a linguagem VBA (Visual Basic).`;
  NewP.innerText =
    'Onde nele poderia facilmente criar um sistema para melhorar meu processo de trabalho. Onde comecei a me interessar na programação e vi como é importante a tecnologia. Com isso ingressei na faculdade de engenharia de software para poder me aprofundar ainda mais na área de programação. Hoje atualmente estou em busca de mudança de área, para começar na área de programação.';

  field.appendChild(text);
  field.appendChild(NewP);
};

mostrarTexto();
// Page training
