import PostMovie from "../models/postMovies.js";

export const getMovies =  async (req, res) => {
    // res.send('THIS WORKS');
    try {

        const postMovie = await PostMovie.find();
        res.status(200).json(postMovie);

    } catch (error) {
        res.status(404).json({ message: error.message });

    }

}

export const addMovie =  async (req, res) => {
   const movie = req.body;

   const newMovie = new PostMovie(movie);

   try {

    await newMovie.save();

    res.status(201).json(newMovie);

   } catch (error) {

    res.status(409).json({ message: error.message });
    
   }
}