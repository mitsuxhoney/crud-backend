const User = require('../models/user');

const handleGetAllUsers = async(req, res) => {
    const users = await User.find();

    res.status(200).json({
        users
    })

}

const handleCreateUser = async(req, res) => {
    try{
        const user = req.body;
        const newUser = await User.create(user);
        res.status(201).json({
            newUser
        })
    }
    catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

const handleGetUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

const handleUpdateUserInfoById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

const handleDeleteUserById = async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).json({ message: 'User not found' });
        return res.status(201).json({
            id: user.id,
            message: 'User deleted successfully'
        })

    }
    catch(err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {handleGetAllUsers, handleCreateUser, handleGetUserById, handleUpdateUserInfoById, handleDeleteUserById}