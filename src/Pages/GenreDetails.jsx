import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import GenreServices from "../Services/GenreServices";
import MovieCard from "../Components/MovieCard";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";


const GenreDetails = () => {

        const {id} = useParams(); // Récupérer l'ID du genre depuis l'URL
        const location = useLocation ();
        const [movies, setMovies] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [maxPage, setMaxPage] = useState(500); // Nombre maximum de pages pour la pagination

    const fetchMovieByGenreID= async () => {
    try {
        const response = await GenreServices.getMoviesByGenreID(currentPage, id);
        setMovies(response.data.results);
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
        },50)
    } catch (error) {
      console.log(error);
    }
}


useEffect(() => {
   fetchMovieByGenreID()
}, [currentPage])

console.log(location);

return <Container className="d-flex flex-column align-items-center">
  
    <h1>{location.state.genre.name}</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      {movies.map((movie) => {
        return <MovieCard movieCard={movie} key={movie.id}></MovieCard>
    })}   
    </div>

    <Pagination className="mt-5">
        {currentPage > 1 && 
        <>
        <Pagination.First onClick={() => {setCurrentPage(1)}} />
      <Pagination.Prev onClick={() => {setCurrentPage(currentPage - 1)}}/>
      <Pagination.Item onClick={() => {setCurrentPage(1)}}>{1}</Pagination.Item>
      </>}

      {currentPage - 5 > 0 && <>
      <Pagination.Ellipsis onClick={() => {setCurrentPage(currentPage - 5)}}/>
     </>}

     {(currentPage!= 2 && currentPage > 1) && <>
      <Pagination.Item onClick={() => {setCurrentPage(currentPage - 1)}}>{currentPage - 1}
      </Pagination.Item>
    </>}
    
      <Pagination.Item active>{currentPage}</Pagination.Item>

        {currentPage +1 < maxPage && <>
            <Pagination.Item onClick={() => {setCurrentPage(currentPage+1)}}>{currentPage + 1}</Pagination.Item>
        </>}

            {currentPage + 5 <= maxPage && <>
                <Pagination.Ellipsis onClick={() => {setCurrentPage(currentPage+5)}}/>
            </>}

      {currentPage < maxPage && <>
      <Pagination.Item onClick={() => {setCurrentPage(maxPage)}}>{maxPage}</Pagination.Item>
      <Pagination.Next onClick={() => {setCurrentPage(currentPage+1)}}/>
      <Pagination.Last onClick={() => {setCurrentPage(maxPage)}}/>
      </>}
     
    </Pagination>

    </Container>;

}

export default GenreDetails;