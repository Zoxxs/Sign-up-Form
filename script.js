const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password");

function matchPasswords() {
  let passOne = password.value;
  let passTwo = confirmPassword.value;
  if (passOne != passTwo) {
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
  } else {
    password.style.border = "1px solid green";
    confirmPassword.style.border = "1px solid green";
  }
}

password.addEventListener("input", () => {
  matchPasswords();
});
confirmPassword.addEventListener("input", () => {
  matchPasswords();
});