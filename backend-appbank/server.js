require('dotenv').config()
const mysql = require('mysql')
const { APP_PORT, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } = process.env;
const dbConnection = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`;
const database = mysql.createConnection(dbConnection);

database.connect(function (err) {
    if (err) {
        console.log('false connect database' + err)
        return;
    }
    console.log('mysql success connect!');
})
const connecttion = database;
module.exports = connecttion;