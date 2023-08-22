const Tutorial = require("../model/tutorial.model.js");

exports.create = (req, res) => {
    res.send("Create");
}

exports.findAll = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "some error occurred"
            });
        }else{
            res.send(data);
        }
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    res.send({message:"findOne :" + id});
}

exports.findAllPublished = (req, res) => {
    res.send("findAllPublished");
}

exports.update = (req, res) => {
    res.send("update");
}

exports.delete = (req, res) => {
    res.send("delete");
}

exports.deleteAll = (req, res) => {
    res.send("deleteAll");
}