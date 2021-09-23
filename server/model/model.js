const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    activestate:{
        type: Boolean,
        required:true,
    },
    enddate:{
        type: Date,
        required:true,
    },
})

const Tododb=mongoose.model('todo', schema);

module.exports=Tododb;