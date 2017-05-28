var button = document.querySelector('.button')
var headline = document.querySelector('.header')

button.onclick = function validateForm() {
    var passwordInput = document.form.password.value;
    var usernameInput = document.form.username.value;
    var integerValidation = new RegExp('([0-9])')

    if(!integerValidation.test(usernameInput)) {
      alert('incorrect')
      return false;
    }
    if(passwordInput !== '12345678') {
      alert('incorrect');
      return false;
    }
    headline.innerText = 'The information in the form is correct';
}
