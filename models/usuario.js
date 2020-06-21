'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'id_fan',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome_fan',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'email_fan',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha_fan',
			type: DataTypes.STRING,
			allowNull: false
		},
		sexo: {
			field: 'sexo_fan',
			type: DataTypes.STRING,
			allowNull: false
		},
		fav_album: {
			field: 'album_fav',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'tb_fan', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};

// module.exports = (sequelize, DataTypes) => {
//     let ins_email = sequelize.define('ins_email',{
// 		id: {
// 			field: 'id_email',
// 			type: DataTypes.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true
// 		},		
// 		email: {
// 			field: 'dominio_email',
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		}
// 	}, 
// 	{
// 		tableName: 'tb_email', 
// 		freezeTableName: true, 
// 		underscored: true,
// 		timestamps: false,
// 	});

//     return ins_email;
// };

