import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Container } from'react-bootstrap';

const PeopleCard = ({ peopleCard }) => {
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate("/People/" + id);
  };

  return (
    <Container className='d-flex flex-column align-items-center'>
         <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" +peopleCard.profile_path} />
      <Card style={{ width: '18rem' }} onClick={() => navigateTo(peopleCard.id)}>
        <Card.Body>
          <Card.Title>{peopleCard.name}</Card.Title>
          
          <Button variant="primary" onClick={() => navigateTo(peopleCard.id)}>Voir Détail</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PeopleCard;
