const mongoose = require('mongoose');

const connect = async (url) => {
    
    await mongoose.connect(url)
    .then( () => {
        console.log("Connected successfully");
    })
    .catch( err => console.error(err));
    
}

module.exports = connect;