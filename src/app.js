const express= require('express')
const app= express()
//const admin= require("firebase-admin") 
const bodyParser = require('body-parser')
const test = require("./saveDb.js")

/* 
var serviceAccount = require("C:/Projects/clientServerMerge/classroom-engagement-app-firebase-adminsdk-b6htf-3620fb90c4.json");

const firebase_initialize= admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apikey: "AIzaSyCM3LDH0nnOHDaMu_-e6tckm51YcJ-8aL4",
  authDomain: "classroom-engagement-app.firebaseapp.com",
  databaseURL: "https://classroom-engagement-app-default-rtdb.firebaseio.com"
});
 */

//const db = firebase_initialize.database()

require('dotenv').config()

app.use(bodyParser.json())
/* 
const testId = 1
const testName = "ksd"
const testAge = 5
const testSchool = "UWI" */

app.post("/save/", function(req,res){
    test.savedata(req.body, function(err,data){
        res.send(data);
    });
});



//app.use('/', require('./routes/heyRoutes.js'))

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log('Server is running on: 3000')
} )