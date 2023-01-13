const mongoose = require('mongoose')

export default function connectDb() { 
    mongoose.connect('mongodb+srv://root:Sixmist666@cluster0.90uzwdo.mongodb.net/movies')
}