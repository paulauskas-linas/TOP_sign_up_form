const pass1 = document.querySelector("#password1");
const pass2 = document.querySelector("#password2");

pass2.addEventListener('keyup', checkValidity);

function checkValidity(){
    return pass1.value == pass2.value ? pass2.setCustomValidity("") : pass2.setCustomValidity('Passwords do not match');
}