function onFocusUsername() {
  const usernameInput = document.querySelector('#username');
  if (usernameInput.value === "Username") {
    usernameInput.value = '';
  }
  console.log('focus su username');
}

function onBlurUsername() {
  const usernameInput = document.querySelector('#username');
  if (usernameInput.value.length === 0) {
    usernameInput.value = 'Username';
  }
  console.log('blur su username');
}

function onFocusPassword() {
  const passwordInput = document.querySelector('#password');
  if (passwordInput.value === "Password") {
    passwordInput.value = '';
  }
  console.log('focus su password');
}

function onBlurPassword() {
  const passwordInput = document.querySelector('#password');
  if (passwordInput.value.length === 0) {
    passwordInput.value = 'Password';
  }
  console.log('blur su password');
}

const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("focus", onFocusUsername);
usernameInput.addEventListener("blur", onBlurUsername);

const passwordInput = document.querySelector("#password");
passwordInput.addEventListener("focus", onFocusPassword);
passwordInput.addEventListener("blur", onBlurPassword);

document.getElementById("username").style.display = "none";
document.getElementById("password").style.display = "none";

function accessoClick() {

  document.getElementById("username").style.display = "inline";
  document.getElementById("password").style.display = "inline";
}

document.getElementById("accesso").addEventListener("click", accessoClick);


function changeIMG(event) {
  const vecchiologo = event.currentTarget;
  vecchiologo.src = "https://seeklogo.com/images/T/twitter-logo-2629C04D18-seeklogo.com.png"
  vecchiologo.removeEventListener('click', changeIMG);

  const testo = document.querySelector("h2");
  testo.textContent = "La nuova vita di Twitter";
}

function restoreIMG(event) {
  const vecchiologo = event.currentTarget;
  vecchiologo.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS14rpdgXrumRLsmH7Dk-kCF1tBdquLN3GbNuMpfn75AsEggsVz"
  vecchiologo.addEventListener('click', changeIMG);

  const testo = document.querySelector("h2");
  testo.textContent = "";
}

const vecchiologo = document.querySelector('.logo');
vecchiologo.addEventListener('click', changeIMG);
vecchiologo.addEventListener('mouseover', changeIMG);
vecchiologo.addEventListener('mouseout', restoreIMG);


