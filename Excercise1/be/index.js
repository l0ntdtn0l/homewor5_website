const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const Videos = require('./models/shortVideoModel')
// App configuration
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://taturo252001:NDToan2501@cluster0.g9mdinl.mongodb.net/nguyenductoan'

// Middleware
app.use(express.json())
app.use(Cors())

// DB Configuration
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
})

// API endpoints
app.get('/', (req, res) => res.status(200).send('Hello'))

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts', (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))