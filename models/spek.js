const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    source : {
        type : String,
        required : true,
    },
    detail : {
        description : String,
        raw : {
            nama : String,
            specification : String,
        }
    },
    views : 'Number',
    searchQuery : String,
    createdAt: {
        type: Date,
        default : Date.now,
    }
})

module.exports = mongoose.model('Image', imageSchema);