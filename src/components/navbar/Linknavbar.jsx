import React from 'react'
import { Link } from 'react-router-dom'



const Linknavbar = (titulo) => {
  return (

        <Link to={`/${titulo}`} >{titulo}</Link>    

  )
}

export default Linknavbar