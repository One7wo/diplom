const {Schema, model, ObjectId} = require('mongoose')

const User = new Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    objCount: {type: Number, default: 0},
    tickets: [{type: ObjectId, ref:'TicketList'}]
})

module.exports = model('User', User)