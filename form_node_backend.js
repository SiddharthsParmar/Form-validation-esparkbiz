// const express = require("express");
import express from 'express'
// const mysql = require("mysql");
import mysql from 'mysql'
import cors from "cors";
// const cors= require("cors")
const app =express()
app.use(cors)

app.listen(9000,()=>{
    console.log("reunnnign");
    
})

const connection = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"Dev@Mysql",
    database:"Employee_Database"
})

connection.connect((err,)=>{
    if(err) throw err;
console.log("connected succeffully");


})

