import Nav    from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container   from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
     <Navbar.Brand href="/">Pokemon</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Form"    >Formulario </Nav.Link>
            <Nav.Link href="/"        >Home       </Nav.Link>
            <Nav.Link href="/SobreNos">Sobre Nós  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;