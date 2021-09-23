const Tododb = require('../model/model');

//create
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can't be empty" });
        return;
    }
    const todo = new Tododb({
        title: req.body.title,
        activestate: req.body.activestate,
        enddate: req.body.enddate,
    })

    todo
        .save(todo)
        .then(data => {
            res.send("Todo Created Success");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured while creating"
            });
        });
}

//fetch
exports.find = (req, res) => {

    if (req.query.id) { 
        const id=req.query.id;
        Tododb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `not found todo with id ${id}`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: `Error retrive todo with id ${id}`})
        })
    } else {
        Tododb.find()
            .then(todo => {
                res.send(todo)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occured while retriving data" })
            })
    }
}

//update
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Update can't be empty" })
    }
    const id = req.params.id;

    Tododb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Canot be update todo with ${id} my be todo not found` });
            } else {
                res.send("Todo Updated");
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error Update todo" })
        })
}

//delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Tododb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot be delete ${id} not found` });
            } else {
                res.send("Todo Deleted Success");
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "todo id not found" });
        })
}
