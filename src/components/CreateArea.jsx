import React, { useState } from "react";

function CreateArea(props) {
const [note, setNote ] = useState({
  title: "",
  content: ""
});


function saveNote(event){
const {name, value} = event.target;

setNote( (previus) => {
      return {...previus,
             [name]: value} }
        )

}

function handleNote() {
    props.passNote( prevItem =>[...prevItem,  note]);
    
    setNote({
      title: "",
      content: ""
    })

}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={saveNote} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={saveNote} value={note.content}/>
        <button onClick={handleNote} type="button"  >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
