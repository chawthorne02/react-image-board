
import './App.css';
import ImageBoard from './imageBoard'; 
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ImageForm from './imageForm';


const INITIAL_PHOTOS = [
  {
  src: "https://images.unsplash.com/photo-1664268531721-b3a29768467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  text: " Mcdonalds sponsor me.",
  },

  {
  src: "https://images.unsplash.com/photo-1662581871665-f299ba8ace07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  text: "Going to work somewhere...",
  },

  {
  src: "https://images.unsplash.com/photo-1664261910581-ac3334994d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  text: "What is this ?!"
}
]

function App() {
  const [items, setItems] = useState(INITIAL_PHOTOS);
  
  const addImage = (newItem) => {
    setItems([...items, newItem])
  }
  
  return (
    <div>
      <ImageBoard items={items} addImage={addImage}/>
    </div>
  );
}

export default App;

