const express = require('express');
const router = express.Router();
const response = require(`../../network/response`);
const messageController = require(`./MessageController`);

router.post(`/create`,(req,res)=>{

    messageController.add(req.body.user,req.body.message).then(resolve=>{
        response.success(req,res,resolve);
    }).catch(reject =>{
        response.error(req,res,reject)
    })

});

router.get(`/read`,(req,res)=>{
    messageController.list().then(resolve =>{
        response.success(req,res,resolve);
    }).catch(reject =>{
        response.error(req,res,reject);
    })
});

router.patch(`/update`,(req,res)=>{
    if (req.query.error == "ok") {
        response.error(req,res,"Error simulado",401,"serian los detalles del error");
    }else{
        response.success(req,res,"creado correctamente");
    }
});

router.delete(`/delete`,(req,res)=>{
    if (req.query.error == "ok") {
        response.error(req,res,"Error simulado",401,"serian los detalles del error");
    }else{
        response.success(req,res,"creado correctamente");
    }
});

module.exports = router;