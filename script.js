// Seleciona todos os elementos com a classe 'color' e os armazena em uma variável
const COLOR_BTNS = document.querySelectorAll('.color');

// Percorre cada botão de cor
COLOR_BTNS.forEach(color => {
  // Adiciona um ouvinte de evento de clique a cada botão de cor
  color.addEventListener('click', () => {
    // Obtém o nome da classe do botão clicado
    let colorNameClass = color.className;

    // Verifica se o botão ainda não possui a classe 'active-color'
    if (!color.classList.contains('active-color')) {
      // Extrai o nome da cor do nome da classe (assumindo o formato 'color-colorName')
      let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);

      // Reseta todos os botões de cores ativas (remove a classe 'active-color' de todos)
      resetActiveBtns();

      // Adiciona a classe 'active-color' ao botão clicado
      color.classList.add('active-color');

      // Define a nova imagem da camisa com base na cor clicada
      setNewColor(colorName);
    }
  });
});

// Função para resetar todos os botões de cores ativas
function resetActiveBtns() {
  // Percorre cada botão de cor
  COLOR_BTNS.forEach(color => {
    // Remove a classe 'active-color' do botão
    color.classList.remove('active-color');
  });
}

// Função para definir a nova imagem da camisa com base no nome da cor
function setNewColor(color) {
  // Constrói o novo caminho da fonte da imagem com base no nome da cor
  let newImageSrc = `images/tshirt_${color}.png`;

  // Atualiza o atributo 'src' do elemento img na seção banner-right
  document.querySelector('.banner-right img').src = newImageSrc;
}
