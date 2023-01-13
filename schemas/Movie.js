const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema ({
    title: String, 
    year: Number,
    genre: String, 
    poster: String,
    link: String
})

export default mongoose.models.Movie || mongoose.model("Movie", movieSchema)