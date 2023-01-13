import connectDb  from "../../lib/connect"
import Movie from "../../schemas/Movie";

export default async function handler (req, res) { 
    if(req.method === "POST"){ 
        connectDb()
        const {title, year, genre, poster, link} = req.body
        const newMovie = new Movie({title, year, genre, poster, link}) 
        await newMovie.save()
        res.status(200).json({ message: title })
    }
    else if(req.method === "GET"){ 
        connectDb()
        const movies = await Movie.find()
        res.send(movies)
    }
}