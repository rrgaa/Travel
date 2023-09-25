import { Nav, Navbar, Container, Image,} from "react-bootstrap";
import Logo from "../Images/Logo-2.webp";
function Navigasi() {
  return (
    <div className="Navbar">
      <Navbar expand="lg" variant="dark" bg="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#Home" className="Logo">
            <Image className="Image" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home" className="Link">
                Home
              </Nav.Link>
              <Nav.Link href="#About" className="Link">
                About
              </Nav.Link>
              <Nav.Link href="#Service" className="Link">
                Service
              </Nav.Link>
              <Nav.Link href="#Product" className="Link">
                Product
              </Nav.Link>
              <Nav.Link href="#Contact" className="Link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigasi;
