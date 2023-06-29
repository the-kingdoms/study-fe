const idInput = document.getElementById("idInput");

const pwInput = document.getElementById("pwInput");
const loginButton = document.getElementById("loginButton");

const buttonAble = () => {
  id = idInput.value;
  pw = pwInput.value;

  if (id.length > 5 && pw.length > 5) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

const popUp = () => {
  id = idInput.value;
  pw = pwInput.value;

  alert("id : " + id + "\npw :" + pw);
};

idInput.addEventListener("input", buttonAble);
pwInput.addEventListener("input", buttonAble);
loginButton.addEventListener("click", popUp);
