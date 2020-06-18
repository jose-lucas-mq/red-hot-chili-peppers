CREATE DATABASE bd_rhcp;
USE bd_rhcp;

CREATE TABLE tb_email (
	id_email INT PRIMARY KEY AUTO_INCREMENT,
    dominio_email VARCHAR(50)
);


CREATE TABLE tb_fan(
	id_fan INT PRIMARY KEY AUTO_INCREMENT,
	email_fan VARCHAR(45),
    nome_fan VARCHAR(100),
    senha_fan VARCHAR(45),
    sexo_fan CHAR(1),
		CHECK (sexo_fan = 'F' or sexo_fan = 'M'),
	album_fav VARCHAR(100)
);



SELECT * FROM tb_fan;
DESC tb_fan;


SELECT * FROM tb_email;
DESC tb_email;


INSERT INTO tb_email
	VALUES 
		(null, 'jose2002lucas@gmail.com'),
        (null, 'basquete2402@gmail.com'),
        (null, 'sebastiao1977jose@gmail.com');
        
        
INSERT INTO tb_fan
	VALUES 
		(null,'jose2002lucas@gmail.com','Jose Lucas Marinho Queiroz','#Gfpassword','M','By The Way');
        