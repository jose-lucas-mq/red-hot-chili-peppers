


ano_footer.innerHTML = `${new Date().getFullYear()}`;


function ver_senha_login(){
    minha_senha_login.type = 'text';
    eye_cort_login.style.fontSize = '20px';
    eye_login.style.fontSize = '0px';
}

function esconder_senha_login(){
    minha_senha_login.type = 'password';
    eye_cort_login.style.fontSize = '0px';
    eye_login.style.fontSize = '20px';
}

function ver_senha_cadastro(){
    minha_senha_cadastro.type = 'text';
    eye_cort_cadastro.style.fontSize = '20px';
    eye_cadastro.style.fontSize = '0px';
}

function esconder_senha_cadastro(){
    minha_senha_cadastro.type = 'password';
    eye_cort_cadastro.style.fontSize = '0px';
    eye_cadastro.style.fontSize = '20px';
}