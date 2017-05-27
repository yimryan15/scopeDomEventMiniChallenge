var headline = document.querySelector('.header')

window.onkeypress = function(input) {
  headline.innerText = input.key;
}
