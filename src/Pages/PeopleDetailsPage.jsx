import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import PeopleServices from "../Services/PeopleServices";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";



const PeopleDetailsPage = () => {

    const {id} = useParams();
    const [people, setPeople] = useState({});
    const [movies, setMovies] = useState([]);
    const [actorsmovie, setActorsMovie] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(20);

    const fetchALLDetails = async () => {
        try {
            const response = await PeopleServices.getALLDetails(id);
            setPeople(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
   
 const fetchALLMoviespeople = async () => {
    try {
        const response = await PeopleServices.getALLMovieByPeople(id, currentPage);
        setActorsMovie(response.data.results);
        setMaxPage (response.data.total_pages);
       
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    fetchALLDetails()
 }, [])
;
useEffect(() => {
    fetchALLMoviespeople()
}, [currentPage])

    return <>
    <Container className="d-flex flex-column align-items-center">
  
  <h1> {people.name} </h1>
  <img style={{width : '23%'}}className="mt-3" src={"https://image.tmdb.org/t/p/original" + people.profile_path}/>
  <p> {people.birthday} </p>
  <p className="resume"> Biographie {people.biography}</p>
  <div className="d-flex justify-content-center flex-wrap gap-5">
  </div>
  <h2>Filmographie :</h2>
<div className="filmographie">
    {actorsmovie.map((actorsmovie) => {
        return <MovieCard movieCard={actorsmovie} key={actorsmovie.id}></MovieCard>
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

    </>;
}
 
export default PeopleDetailsPage;