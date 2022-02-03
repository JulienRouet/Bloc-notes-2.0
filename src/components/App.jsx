import React, {useEffect, useState} from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './styles/styles.css';

const App = () => {
    const getNotes = () => {
      const loadData = JSON.parse(localStorage.getItem('bloc-noteData'));
      return loadData ? loadData : [] ;
    };
  
    const [notes, setNotes] = useState(getNotes());
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
  
    const handleChangeTitle = (event) => {
      setTitle(event.target.value);
    }
    
    useEffect(() => {
      console.log(localStorage.getItem('bloc-noteData'))
    }, [])
  
    const handleChangeContent = (event) => {
      setContent(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      notes.unshift({title: title, content: content});
      saveNotes(notes);
      console.log(localStorage.getItem('bloc-noteData'));
    }
    
    const handleDelete = (event) => {
      event.preventDefault();
      notes.splice(0, 1);
      saveNotes(notes);
      console.log(localStorage.getItem('bloc-noteData'));
    }
  
    const saveNotes = (addedNotes) => {
      const toSave = JSON.stringify(addedNotes)
      localStorage.setItem('bloc-noteData', toSave);
      setNotes(getNotes());
    };
  
    return (
      <>
        <NoteDisplay note={notes} content={content} title={title}/>
        <MarkdownInput 
          title={title} 
          content={content} 
          handleChangeTitle={handleChangeTitle} 
          handleChangeContent={handleChangeContent} 
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}/>
      </>
    )
    
  };
export default App;