var mongoose = require('mongoose')

var visitInfoSchema = mongoose.Schema({
    visitDate: Date,
    visitTime : String,
    visitPrice: Number, 
    visitDuration: String,
    visitLang: String,
    visitOptions: String,
    visitStock: Number
})


var visitSchema = mongoose.Schema({
    visitNumber: String,
    visitDesc: String,
    visitProp: String,
    visitVotes: Number,
    visitImg: String,
    visitInfo: [visitInfoSchema]

})

var visitModel = mongoose.model('visits', visitSchema)

module.exports = visitModel;