module.exports =  (sequelize, DataTypes) => {

    // define schema of the table...

    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.BLOB('long')
        }
        
    })
    return Posts;
}