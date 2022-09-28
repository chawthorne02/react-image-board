
import ImageForm from './imageForm';
import ImageList from './imageList';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function ImageBoard({pics, addImage}) {
    return(
      <div>
      <Navbar classname="nav-bar">
        <Container fluid>
        <Navbar.Brand classname="title">Corey's Image Board</Navbar.Brand>
        </Container>
      </Navbar>
        <Container fluid classname="img-form">
        <ImageForm  addImage={addImage}/>
        </Container>
        <Container Fluid className='img-list'>
        <ImageList pics={pics}/>
        </Container>
      

          




      
        {/* <ImageForm  addImage={addImage}/>
        <ImageList pics={pics}/> */}
      </div>
    )
  }
  






export default ImageBoard

