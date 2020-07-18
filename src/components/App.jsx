import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../index.css";
import CreateArea from "./CreateArea"
import Note from "./Note"


function App(){
const [arrayNotes, setArrayNotes] = useState([]);

function borralo(id) {
    setArrayNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  
console.log(arrayNotes);

return (
<div id="content-wrap">
<Header />
<CreateArea passNote={setArrayNotes}/>
 {arrayNotes.map((nota, index) => <Note title={nota.title} content={nota.content} key={index} id={index} delete={borralo}/>) }
<Footer />
</div>);

}
                                                                                    
export default App;
