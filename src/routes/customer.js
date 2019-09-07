let CustomerModel = require('../models/customer.models');
let express = require('express');
let router = express.Router()

// Create a new customer
//POST localhost:3000/customer
router.post('/customer', (req, res) => {
    // req.body
    if (!req.body) {
        return res.send(400).send('Request body is missing')
    }

    //let user = {
    //    name: 'firstname lastname',
    //    email: email@gmail.com
    //}
    let model = new CustomerModel(req.body)
})