import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {

  const { isloading, nbPages , page,  handlePage } = useGlobalContext(); 
  return (
    <div className="btn-container">
      <button disabled={isloading} onClick={ () => handlePage('dec')} > prev </button>
      <p> { page + 1 } of { nbPages } </p> 
      <button disabled={isloading} onClick={ () => handlePage('inc')} > next </button>
    </div>
  )
}

export default Buttons