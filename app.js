const express= require('express')
const app= express()

require('dotenv').config()



// app.get('/', (req, res)=>{
//     res.send("Server is running")
// })

app.use('/', require('./routes/heyRoutes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log('Server is running on: 3000')
} )