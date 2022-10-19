
import ImageForm from './imageForm';
import ImageList from './imageList';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function ImageBoard({items, addImage}) {
  return(
      <div className='container'>
      <Navbar className="nav-bar">
        <Container>
        <Navbar.Brand className="title">Corey's Image Board</Navbar.Brand>
        </Container>
      </Navbar>
        <Container className="img-form">
        <ImageForm  addImage={addImage} />
        </Container>
        <Container className='img-list'>
        <ImageList items={items} />
        </Container>
      </div>
    )
  }
  






export default ImageBoard

