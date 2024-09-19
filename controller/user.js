const User = require('../models/user');

const getUsers = async(req, res) => {
    try{
        const users = await User.find();
        res.json({data: users, status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

const addUser = async(req, res) => {
    const user = new User({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try{
        const u = await user.save();
        res.json({data: u, status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

const getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json({data: user, status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

const updateUser = async(req, res) => {
    try{
        const u = await User.findByIdAndUpdate({ _id: req.params.id}, req.body, { 
            useFindAndModify: false, new: true
        });
        res.json({data: u, status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

const updateUserStatus = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        user.sub = req.body.sub;
        const u = await user.save();
        res.json({data:u , status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

const deleteUser = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        await user.delete();
        res.json({message: "Deleted", status: 200});
    }catch(err){
        res.json({message: err, status: 400});
    }
}

module.exports = {getUsers, addUser, getUserById, updateUser, updateUserStatus, deleteUser}