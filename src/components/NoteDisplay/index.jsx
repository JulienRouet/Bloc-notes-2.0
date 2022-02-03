import React, {useEffect, useState} from "react";
import Showdown from 'showdown';

const NoteDisplay = (props) => {
  const {title, content} = props
  const [noteHtml, setNoteHtml] = useState();

  useEffect(() => {
    const converter = new Showdown.Converter();
    const fullText = "# " + title + "\n" + content;
    setNoteHtml(converter.makeHtml(fullText));
  }, [title, content])

  const displayNoteHtml = () => {
    return {__html: noteHtml};
  }

  return (
    <>
      <div dangerouslySetInnerHTML={displayNoteHtml()} className="noteHtml"></div>
    </>
  );
}

export default NoteDisplay;