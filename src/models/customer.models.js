let mongoose = require('mongoose')

const server = 'ds221609.mlab.com:21609';
const database = 'rest-api-workshop';
const user = 'theoutlander';
const password = 'fZsMGZXOMx8....';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);