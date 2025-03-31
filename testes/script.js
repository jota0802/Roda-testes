// Array com as palavras para a animação
const words = ["qualidade", "excelência", "inovação", "tradição", "sabor"];
let currentIndex = 0;
const container = document.querySelector('.word-container');

/**
 * Insere a nova palavra com animação de slide vertical.
 */
function showWord(newWord) {
  // Cria um novo elemento span para a nova palavra
  const newSpan = document.createElement('span');
  newSpan.classList.add('word');
  newSpan.textContent = newWord;
  container.appendChild(newSpan);

  // Força o reflow para disparar a transição
  newSpan.getBoundingClientRect();

  // Ativa a nova palavra para que deslize para a posição visível
  newSpan.classList.add('active');

  // Procura por uma palavra anterior ativa para animar sua saída
  const oldWord = container.querySelector('.word.active:not(:last-child)');
  if (oldWord) {
    oldWord.classList.remove('active');
    oldWord.classList.add('exit');
    // Remove o elemento antigo após a transição
    setTimeout(() => {
      oldWord.remove();
    }, 500);
  }
}

/**
 * Troca as palavras periodicamente.
 */
function rotateWords() {
  showWord(words[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
}

// Inicializa com a primeira palavra
rotateWords();

// Troca a cada 3 segundos
setInterval(rotateWords, 3000);
