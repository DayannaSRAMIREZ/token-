const express = require('express'); 
const app = express(); 
const {key}= require('./src/keys'); 
var indexRouter = require('./src/routes/index');


app.set('key', key); 

app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 
app.use('/', indexRouter);



app.listen(3000, ()=>{
    console.log("http://localhost:3000");
}); 




