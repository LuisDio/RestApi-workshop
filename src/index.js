let express = require('express')

let app = express()

// import route from route folder
let personRoute = require('./routes/person')

// using route to person
app.use(personRoute)

// Serving static file 
app.use(express.static('public'))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));