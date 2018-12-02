var mysql=require('mysql');
var connection=mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cherry_doll_tattoo'
})

module.exports=connection;