var mysql = require('mysql2/promise')

var mysql_con = mysql.createPool({
    host:process.env.host,
    database:process.env.database,
    user:process.env.user,
    paassword:process.env.paassword

})
mysql_con.getConnection(function conn(con) {
    if(con){
        console.log("sucessfully connected");
    }else{
        console.log("connection failed");
    }
})

module.exports = {mysql_con}