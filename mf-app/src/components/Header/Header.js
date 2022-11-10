import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Link to='/'><h1>Mary Flowers</h1></Link>
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
