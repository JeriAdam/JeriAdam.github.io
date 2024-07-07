import { NavLink, useMatch, useResolvedPath } from "react-router-dom"
import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
  return (
    <>
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand to="#home">VehicleQuest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='placement'>
            <Nav.Link><CustomLink to="/Home">Home</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/about">About us/Contact us</CustomLink></Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="pos">
              <NavDropdown.Item><CustomLink to='/shop'>Cars</CustomLink></NavDropdown.Item>
              <NavDropdown.Item><CustomLink to="/shop">Motor bikes</CustomLink></NavDropdown.Item>
              <NavDropdown.Item><CustomLink tp="/shop">Boats</CustomLink></NavDropdown.Item>
              <NavDropdown.Item><CustomLink to="/shop">Planes</CustomLink></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><CustomLink to="/Products">Shop</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/Book">Book an appointment</CustomLink></Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link><CustomLink to="/Shop"><Person2Icon></Person2Icon></CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/Shop"><ShoppingCartIcon></ShoppingCartIcon></CustomLink></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  )
}