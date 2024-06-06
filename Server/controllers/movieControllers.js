const moviesData = require("../movies.json")
const movies = moviesData

module.exports.getMovies = async(req,res)=>{
    res.status(200).json(movies)
}

module.exports.searchMovies = async(req,res)=>{
    const { title } = req.query
    console.log(title);
     let r=[]
    try{
        movies.forEach(movie=>{
            if(movie.title.toLowerCase().includes(title.toLowerCase())){
                r.push(movie)
            }
        })
        res.status(200).json(r)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}