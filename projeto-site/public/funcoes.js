let login_usuario;
let nome_usuario;
let sexo_usuario;
let album_usuario;

verificar_autenticacao();

function redirecionar_login() {
    window.location.href = 'index.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;


    sexo_usuario = sessionStorage.sexo_usuario_meuapp;
    album_usuario = sessionStorage.album_usuario_meuapp;
    
    debugger;
    if (login_usuario == undefined) {
        redirecionar_login();
    } else {
        span_nome_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }

}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().then(texto => {
                    console.log('Sessão :) ', texto);
                });
            } else {
                console.error('Sessão :.( ');
                logoff();
            }
        });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, { cache: 'no-store' });
}