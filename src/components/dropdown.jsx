import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function DropdownNav({ titulo, opcion1, opcion2, opcion3, opcion4, opcion5, opcion6}) {

  return (
    <Dropdown as={ButtonGroup} >
      <Link className='opcionclase' id={`opcionclase${titulo}`} to={`/clase/${titulo}`}>{titulo}</Link>

      <Dropdown.Toggle className='flecha-opcionclase' variant='light' split id="dropdown-autoclose-true" />

      <Dropdown.Menu className='dropdown-menu'>
        <ul>
            <li>
                <Link className='opcionclase' to={`/category/${opcion1}`}>{opcion1}</Link>
            </li>
            <li>
                <Link className='opcionclase' to={`/category/${opcion2}`}>{opcion2}</Link>
            </li>
            <li>
                <Link className='opcionclase' to={`/category/${opcion3}`}>{opcion3}</Link>
            </li>
            <li>
                <Link className='opcionclase' to={`/category/${opcion4}`}>{opcion4}</Link>
            </li>
            <li>
                <Link className='opcionclase' to={`/category/${opcion5}`}>{opcion5}</Link>
            </li>
            <li>
                <Link className='opcionclase' to={`/category/${opcion6}`}>{opcion6}</Link>
            </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownNav;