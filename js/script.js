const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  console.log(usernameValue);

  if (usernameValue === "") {
    setErrorFor(username, "username cannot be blank.");
  } else {
    setSuccessFor(username);  
  }

  if (emailValue === "") {
    setErrorFor(email, 'Email cannot be blank.');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email.');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty.");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank.");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not match.");
  } else {
    setSuccessFor(password2);
  }
}