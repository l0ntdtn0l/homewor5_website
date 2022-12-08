const mongoose = require('mongoose')
const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
})

// export default mongoose.model('shortVideos', shortVideoSchema)
module.exports = mongoose.model('Videos', shortVideoSchema)