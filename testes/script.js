// Array com as palavras para animação
const words = ["qualidade", "excelência", "energia", "tradição", "sabor"];
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

  // Força o reflow para garantir que a transição ocorra
  newSpan.getBoundingClientRect();

  // Anima a nova palavra para ficar visível
  newSpan.classList.add('active');

  // Anima a palavra anterior para sair
  const oldWord = container.querySelector('.word.active:not(:last-child)');
  if (oldWord) {
    oldWord.classList.remove('active');
    oldWord.classList.add('exit');
    // Remove o elemento antigo após o término da transição
    setTimeout(() => {
      oldWord.remove();
    }, 500);
  }
}

/**
 * Troca as palavras de forma periódica.
 */
function rotateWords() {
  showWord(words[currentIndex]);
  currentIndex = (currentIndex + 1) % words.length;
}

// Inicializa com a primeira palavra
rotateWords();

// Troca a cada 3 segundos (ajuste conforme desejar)
setInterval(rotateWords, 3000);
