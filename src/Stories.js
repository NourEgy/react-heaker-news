import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const { isLoading , hits, removeStory } = useGlobalContext();

  if ( isLoading ) {
    return <div className="loading"></div>
  } 

 
  return (
    <section className="stories">
      {hits.map((story, index) => {
        const {objectID: id, author, title, url, num_comment, points} = story;
        //console.log(story)
        return (
            <article className="story" key={id}>
                <h4 className="title"> {title} </h4>
                <div className="info">
                  {points} points by <span> {author} | </span> {num_comment} Comments
                </div>
                <div>
                  <a href={url} className="read-link" target="_blank" rel="noreferrer"> Read More </a>
                  <button className="remove-btn" onClick={ () => removeStory(id) }> remove </button> 
                </div>
            </article>
        )
      })}
    </section>
  )
}

export default Stories