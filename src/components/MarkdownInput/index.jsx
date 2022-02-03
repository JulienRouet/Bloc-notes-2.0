import React from "react";

const MarkdownInput = (props) => {
    const {handleSubmit, handleChangeTitle, handleChangeContent, title, content, handleDelete} = props
    
    return (
      <section className="note">
        <div className="card p-2 m-5">
          <div className="card-body p-5">
            <form onSubmit={handleSubmit} >
              <div>
                <input onChange={handleChangeTitle} className="card-title title m-3" value={title} type="text"/>
              </div>
              <div className="text-content">
                <textarea  onChange={handleChangeContent} className="card-text content m-3" value={content} type="text"/>
              </div>
              <div className="save-btn">
                <button className='btn btn-primary' type="submit">Sauvegarder</button>
              </div>
              <div className="delete-btn">
                <button className='btn btn-danger' onClick={handleDelete}>Supprimer</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

export default MarkdownInput;