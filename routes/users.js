const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async(req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.send('Error - '+err);
    }
});

router.post('/', async(req, res) => {
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try{
        const u = await user.save();
        res.json(u);
    }catch(err){
        res.send('Error - '+err)
    }
});

router.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.send('Error - '+err);
    }
});

router.patch('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub;
        const u = await user.save();
        res.json(u);
    }catch(err){
        res.send('Error - '+err);
    }
});

router.delete('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        await user.delete();
        res.json("Deleted");
    }catch(err){
        res.send('Error - '+err);
    }
});

module.exports = router;