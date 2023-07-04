const { DataTypes } = require('sequelize');
 
 module.exports = (sequelize) => {

    sequelize.define('Activity', {
    
        id:{
            type : DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull: false,
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true 
        },
        difficulty:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season:{
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },
    
    })

 }