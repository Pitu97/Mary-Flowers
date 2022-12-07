import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="md" sticky="top" id="header">
      <Container>
        <Navbar.Brand id='logo'><Link to='/Mary-Flowers'>Mary Flowers</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      <Container></Container>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to='/decoraciones'>Decoraciones</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/nosotros'>Nosotros</NavLink></Nav.Link>
            <Nav.Link href="#footer">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
}

export default Header;
