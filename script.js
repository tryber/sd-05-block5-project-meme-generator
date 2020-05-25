let fileInput;
let memeImage;
let memeText;
let textInput;
let buttons;
let examples;
function process() {
  memeImage.src = URL.createObjectURL(this.files[0]);
}
function initializeElements() {
  fileInput = document.querySelector('#meme-insert');
  memeImage = document.querySelector('#meme-image');
  memeText = document.querySelector('#meme-text');
  textInput = document.getElementById('text-input');
  // Initialize Buttons
  buttons = [
    document.querySelector('#fire'),
    document.querySelector('#water'),
    document.querySelector('#earth'),
  ];
  examples = [
    document.querySelector('#meme-1'),
    document.querySelector('#meme-2'),
    document.querySelector('#meme-3'),
    document.querySelector('#meme-4'),
  ]
}
function setBorder(element) {
  const container = document.querySelector('#meme-image-container');
  const border = element.target.id;
  container.className = `image-container ${border}-border`;
  container.style.borderColor = element.target.style.backgroundColor;
}
function setMeme(element) {
  memeImage.src = element.target.src;
}
window.onload = function () {
  initializeElements();
  fileInput.addEventListener('change', process);
  textInput.addEventListener('keyup', function (el) {
    memeText.innerText = el.target.value;
  });
  buttons.forEach((button) => {
    button.addEventListener('click', setBorder);
  });
  examples.forEach((example) => {
    example.addEventListener('click', setMeme);
  })
};
