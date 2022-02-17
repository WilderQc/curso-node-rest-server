const {response, request} = require('express');

const usuriosGet = (req = request, res=response)=>{
    const {q, nombre='No name', apikey} = req.query;

    res.json({
       
        msg:'get api - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut =(req, res)=>{
    
    const id =  req.params.id;
    
    res.json({
        msg:'put api Controlador',
        id
    });
}

const usuariosPost =(req, res)=>{
    const {nombre,edad} = req.body; //datos que vienen de postman
    res.json({
        msg:'post api Controlador',
        nombre,
        edad
    });
}


const usuariosDelete = (req, res)=>{
    res.json({
        msg:'delete api Controlador'
    });
}

const usuariosPatch = (req, res)=>{
    res.json({
        msg:'patch api Controlador'
    });
}

module.exports = {
    usuriosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}