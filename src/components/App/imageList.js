


function ImageList({items}){
    const listItems = items.map(({id, src ,text}) => (
    <li key={id}>
        <img src ={src} />
        <p>{text}</p>
    </li>
    ));

    
    return(
      <ul>
        {listItems}
      </ul>
      
    )
  };









export default ImageList; 
  
