const express= require('express')
const app= express()

const admin= require("firebase-admin") 


var serviceAccount = require("C:/Projects/clientServerMerge/classroom-engagement-app-firebase-adminsdk-b6htf-3620fb90c4.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://classroom-engagement-app-default-rtdb.firebaseio.com"
});

const db = admin.database()

require('dotenv').config()

app.use(express.json())

app.post('save', (req,res) =>{
    db.ref('/users/' + req.body.testId).set({
        testName: req.body.testName,
        testAge: req.body.testAge,
        testSchool: req.body.testSchool
    })
})

// app.get('/', (req, res)=>{
//     res.send("Server is running")
// })



app.use('/', require('./routes/heyRoutes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is running on: 3000')
} )