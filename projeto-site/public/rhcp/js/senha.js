


ano_footer.innerHTML = `${new Date().getFullYear()}`;


// function ver_senha_login(){
//     minha_senha_login.type = 'text';
//     eye_cort_login.style.fontSize = '20px';
//     eye_login.style.fontSize = '0px';
// }

// function esconder_senha_login(){
//     minha_senha_login.type = 'password';
//     eye_cort_login.style.fontSize = '0px';
//     eye_login.style.fontSize = '20px';
// }

// function ver_senha_cadastro(){
//     minha_senha_cadastro.type = 'text';
//     eye_cort_cadastro.style.fontSize = '20px';
//     eye_cadastro.style.fontSize = '0px';
// }

// function esconder_senha_cadastro(){
//     minha_senha_cadastro.type = 'password';
//     eye_cort_cadastro.style.fontSize = '0px';
//     eye_cadastro.style.fontSize = '20px';
// }

const show = document.querySelector(".far");

  function showHide() {
    if (senha.type === "password") {
      senha.setAttribute("type", "text");
      show.classList.remove("fa-eye");
      show.classList.add("fa-eye-slash");
    } else {
      senha.setAttribute("type", "password");
      show.classList.remove("fa-eye-slash");
      show.classList.add("fa-eye");
    }
}


function showHide_log() {
  if (password_log.type === "password") {
    password_log.setAttribute("type", "text");
    show.classList.remove("fa-eye");
    show.classList.add("fa-eye-slash");
  } else {
    password_log.setAttribute("type", "password");
    show.classList.remove("fa-eye-slash");
    show.classList.add("fa-eye");
  }
}