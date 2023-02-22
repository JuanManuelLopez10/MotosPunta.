import React from 'react'
import AccesFooter from './AccesFooter'
import CascosFooter from './CascosFooter'
import EmpresaFooter from './EmpresaFooter'
import IndumFooter from './IndumFooter'
import MotoFooter from './MotoFooter'

const Footer = () => {
  return (
    <footer id='footer' className='bg-black d-flex justify-content-around'>
        <MotoFooter/>
        <CascosFooter/>
        <IndumFooter/>
        <AccesFooter/>
        <EmpresaFooter/>
    </footer>
  )
}

export default Footer