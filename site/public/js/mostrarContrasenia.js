 window.addEventListener("load", () => {
  const inputPass2 = document.querySelectorAll(".passTroggle");
  const btnEye = document.querySelectorAll(".input-pass-eye");
  const iconEye = document.querySelectorAll(".icon-eye");


for (let i = 0; i < btnEye.length; i++) {
  btnEye[i].addEventListener("click", (event) => {
  const isActive = iconEye[i].classList.contains("fa-eye-slash");

  if (isActive) {
    inputPass2[i].type = "password";
  } else {
    inputPass2[i].type = "text";
  }
  iconEye[i].classList.toggle("fa-eye");
  iconEye[i].classList.toggle("fa-eye-slash");
});
}})