const express = require('express');
const message = require(`../components/message/MessageNetwork`);
//const user = require(`../components/message/UserNetwork`);

const routes = (server)=>{
    
    server.use(`/message`,message);
    //server.use(`/user`,user);
}

module.exports = routes;