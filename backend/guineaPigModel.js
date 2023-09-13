const mongoose = require('mongoose');
const guineaPigSchema = new mongoose.Schema({
     name: { type: String, required: true },
     age: { type: Number, required: true },
     likes: String
});

const GuineaPigModel = mongoose.model('guineapig', guineaPigSchema);

module.exports = GuineaPigModel;

