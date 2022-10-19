import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


function ImageForm({addImage}) {
    const [src, setSrc] = useState("");
    const [text, setText] = useState("");

    const handleSrcInput = (e) => {
        setSrc(e.target.value);
    };

    const handleTextInput = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            src,
            text,
        }
        addImage(newImage);
        setSrc("");
        setText("");
    };
    


        return(
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId='formImgUrl'>
                <Form.Label>Image Url</Form.Label>
                <Form.Control type='url' name="urlInput" value={src}  onChange={handleSrcInput} placeholder='Image Url...'></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId='imgCaption'>
                <Form.Label>Caption Image</Form.Label>
                <Form.Control type='text' value={text} name="textInput" onChange={handleTextInput} placeholder='Enter Caption...'></Form.Control>
            </Form.Group>
            <Button variant="secondary">Cancel</Button>
            <Button variant="success" name="submitButton" onClick={handleSubmit}>Add Image</Button>
        </Form>
    
    )
 }    





export default ImageForm;


// import {useState} from 'react';
// function ImageForm({addPic}){
//     const [name, setName] = useState('');
//     const handleInput = (event) => {    
//         setName(event.target.value);
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newPic = {
//         }
//         addPic(newPic);
//         setName('');
//       };
//     return(
//         <form class="image-form" onSubmit={handleSubmit}>
//             <input class="image-url" type="url" name="url-input" placeholder='Image URL' />
//             <input class="image-caption" type="text" name="text-input" placeholder='Image Caption'/>
//             <div class="buttons">
//                 <button class="cancel-btn" type='submit'>Cancel</button>
//                 <button class="add-btn" type='submit' onChange={handleInput}>Add Image</button>
//             </div>
//         </form>
//     )
// };
// export default ImageForm;







