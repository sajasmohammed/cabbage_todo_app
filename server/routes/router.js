const express=require('express');
const route=express.Router();
const controller=require('../controller/controller');

//api
route.post('/todos', controller.create);
route.get('/todos', controller.find);
route.put('/todos/:id', controller.update);
route.delete('/todos/:id', controller.delete);

module.exports=route;