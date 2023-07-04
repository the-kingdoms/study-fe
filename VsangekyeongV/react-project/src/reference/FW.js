const idInput = document.getElementById("idInput");

const pwInput = document.getElementById("pwInput");
const loginButton = document.getElementById("loginButton");

const buttonAble = () => {
  id = idInput.value;
  pw = pwInput.value;

  if (id.length > 5 && pw.length > 5) {
    loginButton.disabled = false;
    loginButton.classList.remove("disabled");
    loginButton.classList.add("abled");
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove("abled");
    loginButton.classList.add("disabled");
  }
};

const popUp = () => {
  id = idInput.value;
  pw = pwInput.value;
  alert("id : " + id + "\npw :" + pw);
  idInput.value = "";
  pwInput.value = "";
  window.location.href = "https://www.google.com";
};

idInput.addEventListener("input", buttonAble);
pwInput.addEventListener("input", buttonAble);
loginButton.addEventListener("click", popUp);
