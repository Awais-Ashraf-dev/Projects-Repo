const express = require('express')
const mysql = require('mysql')
const  cors = require('cors')
 const app = express();
app.use(cors());
 const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: " ",
    database: 'student'  
 })

 app.get('/',(req,res)=>{
    const sql = "SELECT * FROM student_data";
    db.query(sql,(err,result)=>{
        if(err)return res.json({Message : 'Error inside server'});
        return res.json(result);    
    })
 })
app.listen(3002, ()=>{
    console.log('Api is Working');
   
})