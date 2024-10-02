import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GenreServices from "../Services/GenreServices";
import MovieCard from "../Components/MovieCard";
import { useParams } from "react-router-dom";


const GenreDetails = () => {

        const {id} = useParams(); // Récupérer l'ID du genre depuis l'URL
        const [movies, setMovies] = useState([]);

    const fetchMovieByGenreID= async () => {
    try {
        const response = await GenreServices.getMoviesByGenreID(1, id);
        setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
}


useEffect(() => {
   fetchMovieByGenreID()
}, [])

return <Container className="d-flex flex-column align-items-center">
  
    <h1>Détails Genre {id}</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      {movies.map((movie) => {
        return <MovieCard movieCard={movie} key={movie.id}></MovieCard>
    })}   
    </div>

    </Container>;

}

export default GenreDetails;