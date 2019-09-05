let express = require('express')

let app = express()

// Serving static file 
app.use(express.static('public'))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));