module.exports =  (sequelize, DataTypes) => {
    // define name of the table...
    const Posts = sequelize.define('Posts', {
        titulo: {
            type: DataTypes.STRING
        },
        contenido: {
            type: DataTypes.STRING
        },
        categoria: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.BLOB('long')
        }
        
    })
    return Posts;
}