const express=require('express');

const { listen } = require('express/lib/application');

const server=express();

server.listen(3000);

//inserindo midleware

server.use((req,res,next)=>{
    console.log('Trenzinho faz randandandandan')
    next();
})

server.use((req,res,next)=>{
    req.requestTime=Date.now();
    next();
})

server.get('/',(req,res)=>{
    console.log(req.requestTime)
    res.send('<h1>Trenzinho faz randandandandan</h1>');
})