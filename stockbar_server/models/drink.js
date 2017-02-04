var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drinkSchema = new Schema({
    name: String,
    type: String,
    price: {default: Number, price: Number}
});

module.exports = mongoose.model('Drink', drinkSchema);
