import { useEffect, useState } from "react";
import PeopleServices from "../Services/PeopleServices";
import PeopleCard from "../Components/PeopleCard";
import { Container, Pagination } from "react-bootstrap";


const PeoplePage = () => {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500); // Nombre maximum de pages pour la pagination
    const fetchALLPeople = async () => {
        try {
            const response = await PeopleServices.getALLPeople(currentPage);
            console.log(response.data.results);
            setPeople(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchALLPeople();
    }, [currentPage]);

    return  <Container className="d-flex flex-column align-items-center">
            <h1>People</h1>
            <div className="listGenre">
                {people.map((people) => (
                    <div key={people.id} style={{ width: '23%' }}>
                        <PeopleCard peopleCard={people} />
                    </div>
                ))}
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
        </Container>
};

export default PeoplePage;
