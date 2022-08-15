const express = require('express'); 
const app = express(); 
const verificacion = require('./middlewares/token')
const jwt= require('jsonwebtoken'); 
const {key}= require('./keys'); 

app.set('key', key); 

app.use(express.urlencoded({extended:false})); 
app.use(express.json()); 
app



app.listen(3000, ()=>{
    console.log("http://localhost:3000");
}); 
app.get('/', (req,res)=>{
    res.send(key)
})
app.post('/login', (req,res)=>{
if(req.body.usuario==="admin"&&req.body.pass==="12345"){
    const payload= {
        check: true
    }; 
    const token = jwt.sign(payload, app.get('key'), {
        expiresIn: '7d'
    }); 
    res.json({
        message:"Autenticacion exitosa",
        token: token 
    })

}else{
    res.json({
        message: "pass y usuario incorrectos"
    })

}

})



app.get('/info', verificacion, (req,res)=>{
    res.send('mensaje privado')
})



