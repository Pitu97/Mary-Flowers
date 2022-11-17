import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <h1 className='logo'><Link to='/'>Mary Flowers</Link></h1>
        <nav>
            <ul>
                <li><NavLink to='/decoraciones'>Decoraciones</NavLink></li>
                <li><NavLink to='/nosotros'>Nosotros</NavLink></li>
                <li><a href='#footer'>Contacto</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
