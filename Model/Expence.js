const mongoose = require('mongoose');
const {Schema} = mongoose;

const ExpenceSchema = new Schema({
   amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String,required: true},
    date: { type: String, required: false },
    userID: { type: Schema.Types.ObjectId, ref: 'user' },
},{timestamps: true});

const Expence = mongoose.model('expence', ExpenceSchema);

module.exports = Expence;