function email(){
    let meu_email = inp_email.value;
    msg.style.display  = 'block';

    

    if(meu_email.indexOf('@gmail.com') > 0 || meu_email.indexOf('@hotmail.com') > 0 || meu_email.indexOf('@outlook.com') > 0){
        msg.innerHTML = 'Seu email é válido';
        msg.style.color = 'green';

    }

    else{
        msg.innerHTML = 'Insira um email válido';
        msg.style.color = 'orangered';
    }
    
}

// Fonte de pesquisa: https://www.codigofonte.com.br/codigos/verificando-a-forca-da-senha-com-javascript
// e https://pt.stackoverflow.com/questions/15738/como-validar-com-regex-uma-string-contendo-apenas-letras-espa%C3%A7os-em-branco-e-le

function f_senha(){
    senha = document.getElementById("password").value;
	forca = 0;
	mostra = document.getElementById("msg");
	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length>7){
		forca += 25;
	}
	if(senha.match(/[a-z]+/)){
		forca += 10;
	}
	if(senha.match(/[A-Z]+/)){
		forca += 20;
	}
	
	// if(senha.match(/d+/)){
	// 	forca += 20;
	// }
	// if(senha.match(/W+/)){
	// 	forca += 25;
	// }
	
	// O mesmo que (/d+/)					 O mesmo que (/W+/)
    if(senha.match(/[0-9]/) || senha.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)){
		forca += 25;
	}
	return mostra_res();
}

function mostra_res(){
    mostra.style.display = 'block';
	if(forca < 30){
		mostra.innerHTML = 'Sua senha está muito fraca';
	}else if((forca >= 30) && (forca < 60)){
		mostra.innerHTML = 'Ainda não está muito boa';
	}else{
		mostra.innerHTML = 'Sua senha está muito boa!';
	}
}