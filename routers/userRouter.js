const express = require('express');

const userRouter = express.Router();
const UserModel = require('../models/userModel')

//GET all 
userRouter.get('/', (req, res) => {
    UserModel.find({}, (err, users) => {
        if (err) res.status(500).send({ success: 0, err });
        else res.send({ success: 1, users });
    })
})

// CREAT new POST: /api/users
userRouter.post('/', (req, res) => {

    // Create all
    const { username, email, password, avatarUrl, name } = req.body;
    UserModel.create({ username, email, password, avatarUrl, name }, (err, userCreated) => {
        if (err) res.status(500).send({ success: 0, err });
        else res.send({ success: 1, userCreated });
    })
})

// get user by id
userRouter.get("/:Id_user", (req, res) => {
    UserModel.findById({ _id: req.params.Id_user }, function (err, userFound) {
        if (err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, userFound });
    });
});
// update 
//UserRouter.put

userRouter.put("/:Id_user", (req, res) => {
    UserModel.findById({ _id: req.params.Id_user }, function (err, data) {
        if (err) console.log(err)
        else {
            if (req.body.email) data.email = req.body.email;
            if (req.body.password) data.password = req.body.password;
            if (req.body.username) data.username = req.body.username;          
            if (req.body.avataUrl) data.avataUrl = req.body.avataUrl;
            if (req.body.name) data.name = req.body.name;
            Data.save(function (err) {
                if (err) res.status(500).send({ success: 0, err })
                else res.send({ success: 1, Id_user: data._id });
            });
        }
    });
});
// delete 
//UserRouter.delete
userRouter.delete("/:Id_user", (req, res) => {
    UserModel.findByIdAndRemove({ _id: req.params.Id_user }, function (err, userDelete) {
        if (err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, message: "Deleted user" });
    });
});




module.exports = userRouter;