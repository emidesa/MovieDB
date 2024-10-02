import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GenreServices from "../Services/GenreServices";
import MovieCard from "../Components/MovieCard";
import { useParams } from "react-router-dom";


const GenreDetails = () => {

        const {id} = useParams(); // Récupérer l'ID du genre depuis l'URL
       

    const fetchMovieByGenreID= async () => {
    try {
        const response = await GenreServices.getMoviesByGenreID(1, id);
        console.log(response);
    } catch (error) {
      console.log(error);
    }
}


useEffect(() => {
   fetchMovieByGenreID()
}, [])

return <>
  
    <h1>Détails Genre {id}</h1>

    
   
    </>
}

export default GenreDetails;