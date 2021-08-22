function newWord() {
  document.getElementById("word").textContent =
    words[Math.floor(Math.random() * words.length)];
}
