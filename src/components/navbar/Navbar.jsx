import { useContext } from 'react';
import { CartContext } from '../CartContext';
import NavVertical from './NavVertical';


const Navbar = () => {
    const usecont = useContext(CartContext)
    const primerorient = () => {
        usecont.getscrorient()
    }
    primerorient()
    window.addEventListener("orientationchange", (event) => {
        usecont.cambiodeorient(event)
    });

        return(
                <NavVertical/>
        )
}

export default Navbar;