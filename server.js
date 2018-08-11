const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const apiRouter = require('./routers/apiRouter')


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/techkid-hotgirl',(err)=>{
    if(err) console.error(err)
    else console.log("success db")
})
app.get('/', (req,res)=>{
    res.send('helllooo')
});

app.use('/api', apiRouter)
// app.use('/users', userRouter)

app.listen(6969,(err)=>{
    if(err) console.log(err);
    else 
    console.log("Port at 6969")
});
