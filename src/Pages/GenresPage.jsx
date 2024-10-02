import GenreServices from "../Services/GenreServices";
import { useState , useEffect} from "react";
import { Container } from "react-bootstrap";
import Button from'react-bootstrap/Button';
import { Link, useNavigate } from'react-router-dom';

const Genrespage = () => {

    const[genres,setGenres] = useState([]);
    const navigate = useNavigate();

   const navigateTo = (genre) => {
    navigate("/genre/"+genre.id, {state : {"genre" : genre}});
   }
 

    const fetchgenres = async () => {
        try {
            const response = await GenreServices.getALLGenres();
            setGenres(response.data.genres);
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
       fetchgenres()
    }, [])

    return <Container className="d-flex flex-column align-items-center">
  
    <h1>Genres</h1>
     <div className="d-flex justify-content-center flex-wrap gap-3"> 
      {genres.map((genre) => {
        
        return <Button  variant = "primary" key={genre.id} 
        onClick={() => {navigateTo(genre)}}>{genre.name}</Button>
    })}   
    </div>
    </Container>
    
}
 
export default Genrespage;