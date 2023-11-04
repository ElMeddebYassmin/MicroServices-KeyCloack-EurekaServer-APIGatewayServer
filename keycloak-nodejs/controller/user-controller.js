const express = require('express');
const User = require('../models/user.js');
const keycloak = require('../config/keycloak-config.js').getKeycloak();

var router = express.Router();

//Create a user
router.post('/user',keycloak.protect('user'),function(req,res){
    //Create User Object
    const user = new User({
        userid: req.body.userid,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    //Save in DB
    user.save()
    .then(data => {
        res.send("Successfully added user" +data.firstName);
    }).catch(err => {
        res.status(500).send({message:`Error creating user ${err.message}`});
    });
});

//Find a user
router.get('/user/:id', keycloak.protect('admin'),function(req,res){
    User.find({userid:req.params.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userid
            });            
        }
        res.send(user);
    }).catch(err => {         
        return res.status(500).send({
            message: `Error retrieving user : ${err.message}`
        });
    });
    
});

//Update a user
router.put('/user', keycloak.protect('user'),function(req,res){
    // Find note and update it with the request body
    
    User.findOneAndUpdate({userid:req.body.userid}, {
        userid:req.body.userid,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }
        res.send(user);
    }).catch(err => {        
        return res.status(500).send({
            message: `Error updating user: ${err.message} `
        });
    });
});

//Delete a user
router.delete('/user/:id',keycloak.protect('admin'),function (req,res){
    User.findOneAndDelete({userid:req.params.id})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found "
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {         
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userid
        });
    });
});

module.exports = router;