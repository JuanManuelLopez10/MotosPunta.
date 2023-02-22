import React from 'react'

const OpcionenForm = (props) => {
  return (
    <>
    <label className='col-5' htmlFor={`${props.opcion}`}>{props.opcion}</label>
    <input className='col-5' type="text" id={props.opcion}/>
    </>
  )
}

export default OpcionenForm