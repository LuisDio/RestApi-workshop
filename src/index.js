let express = require('express')

let app = express()

let path = require('path')

// import route from route folder
let personRoute = require('./routes/person')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})
// using route to person
app.use(personRoute)

// Serving static file 
app.use(express.static('public'))

// Handler for 404 - Ressource not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
})

// Handle for Error 500
app.use((err, req, res, next) => {
    console.log(err)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));