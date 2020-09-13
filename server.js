const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 12121;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const mysql = require('mysql')

const multer = require('multer')

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

connection.connect(function(err) {

    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});

app.get('/api/dept', (req, res)=> {
    connection.query(
        "select * from dept_tb",
        (err, rows, fields) => {
            res.send(rows)
        }
    )
})

app.listen(port, '0.0.0.0', ()=> console.log(`listening on port ${port}`))