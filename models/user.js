var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    userOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
    userName: String,
    userFirstname: String,
    userEmail: String,
    userPassword: String,
    userAddress: String,
    userZIP: String,
    userCity: String,
})

var userModel = mongoose.model('users', userSchema)

module.exports = orderModel;