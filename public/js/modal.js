

function open_modal_login(){
    login.style.display = 'block';

    close_modal_cadastro();

    event.preventDefault();

    
}

function close_modal_login(){
    login.style.display = 'none';
    event.preventDefault();

}

function open_modal_cadastro(){
    cadastro.style.display = 'block';

    close_modal_login();

    event.preventDefault();
}

function close_modal_cadastro(){
    cadastro.style.display = 'none';
    event.preventDefault();

}