import {useNavigate, useParams} from "react-router-dom";
import MoviesService from "../Services/MoviesService";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
        const navigateTo = (genre) => {
                navigate("/genre/"+genre.id, {state : {"genre" : genre}});
            }
    const fetchMovieByID = async () => {
        try {
            const response = await MoviesService.getMovieByID(id);
            console.log(response.data);
            setMovie(response.data);


        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect (() => {
        fetchMovieByID();
    }, [])

    return < Container className ='d-flex flex-column align-items-center' >
    <h1>{movie.original_title}</h1>
    <img style={{ width: '4%' }} className="mt-3" src={"https://image.tmdb.org/t/p/original"+movie.poster_path}/>
    <p>Budget : {movie.budget}$</p>
    <div className="d-flex justify-content-center gap-3">
    {movie.genres && movie.genres.map((genre)=> {
        return <Button className='btn-perso' variant = "primary" key={genre.id} size="lg" onClick={() => {navigateTo(genre)}}> {genre.name}</Button>
    })}
    
    </div>
    </Container>;
}
 
export default MovieDetailsPage;