import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PeopleServices from "../Services/PeopleServices";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";



const PeopleDetailsPage = () => {

    const {id} = useParams();
    const [people, setPeople] = useState([]);
    const [movies, setMovies] = useState([]);
    const [actorsmovie, setActorsMovie] = useState([]);

    const fetchALLDetails = async () => {
        try {
            const response = await PeopleServices.getALLDetails(id);
            console.log(response.data);
            setPeople(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
   
 const fetchALLMoviespeople = async () => {
    try {
        const response = await PeopleServices.getALLMovieByPeople(id);
        setActorsMovie(response.data.results);
       
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    fetchALLDetails()
    fetchALLMoviespeople()
 }, [])
;


    return <>
    <Container className="d-flex flex-column align-items-center">
  
  <h1> {people.name} </h1>
  <img style={{width : '23%'}}className="mt-3" src={"https://image.tmdb.org/t/p/original" + people.profile_path}/>
  <p> {people.birthday} </p>
  <p className="resume"> Biographie {people.biography}</p>
  <div className="d-flex justify-content-center flex-wrap gap-5">
  </div>
<div className="filmographie">
    {actorsmovie.map((actorsmovie) => {
        return <MovieCard movieCard={actorsmovie} key={actorsmovie.id}></MovieCard>
    })}
</div>
  </Container>;

    </>;
}
 
export default PeopleDetailsPage;