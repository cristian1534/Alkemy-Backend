module.exports =  (sequelize, DataTypes) => {
    // define name of the table...
    const Posts = sequelize.define('Posts', {
        titulo: {
            type: DataTypes.STRING
        }
    })
    return Posts;
}