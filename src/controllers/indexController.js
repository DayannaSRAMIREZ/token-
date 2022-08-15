const{key}= require('../keys'); 
const jwt = require('jsonwebtoken');
module.exports={
    index: (req,res)=>{
        res.send('index')
    }, 
    login:(req,res)=>{
        if(req.body.usuario==="admin"&&req.body.pass==="12345"){
            const payload= {
                check: true
            }; 
            const token = jwt.sign(payload, key, {
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

    },
    info: (req,res)=>{
        res.send('mensaje privado')
    }
}






