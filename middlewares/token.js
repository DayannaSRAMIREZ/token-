const jwt = require('jsonwebtoken');
const{key}= require('../keys')
module.exports= (req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    if(!token){
        res.status(401).send({
            error: "Se require token"
        })
        return
    }
    if(token.startsWith('Bearer ')){
        token= token.slice(7, token.length); 
  
    }
    if(token){
        jwt.verify(token, key, (error, decoded)=>{
            if(error){
                return res.json({
                    message: "El token no es valido"
                })
            }else{
                req.decoded= decoded; 
                next(); 
            }
        })
    }
}