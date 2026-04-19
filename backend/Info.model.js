const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    email: {
        required: true, 
        type: String
    },
    password: {
        required: true,
        type: String 
    },
});


const Info = mongoose.model("Info", infoSchema);
module.exports = Info;