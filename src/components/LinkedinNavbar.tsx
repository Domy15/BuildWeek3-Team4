import { Container,Navbar, Nav,NavDropdown,} from "react-bootstrap";

const LinkedinNavbar = function(){
  
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-1">
      <Container fluid>
     

        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

         <Container className="input-group">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
            <input type="text" placeholder="cerca" className="d-none d-md-inline form-control"></input>
         </Container>

        </div>


          <Nav className="ms-auto d-flex flex-row align-items-center">
            <Nav.Link href="#home" className="text-center mx-2">
              <i className="bi bi-house-door-fill"></i>
              <span className="d-none d-lg-inline ms-1">Home</span>
            </Nav.Link>
            <Nav.Link href="#network" className="text-center mx-2">
              <i className="bi bi-people-fill"></i>
              <span className="d-none d-lg-inline ms-1">Rete</span>
            </Nav.Link>
            <Nav.Link href="#jobs" className="text-center mx-2">
              <i className="bi bi-briefcase-fill"></i>
              <span className="d-none d-lg-inline ms-1">Lavoro</span>
            </Nav.Link>
            <Nav.Link href="#messages" className="text-center mx-2">
              <i className="bi bi-chat-dots-fill"></i>
              <span className="d-none d-lg-inline ms-1">Messaggistica</span>
            </Nav.Link>
            <Nav.Link href="#notifications" className="text-center mx-2">
              <i className="bi bi-bell-fill"></i>
              <span className="d-none d-lg-inline ms-1">Notifiche</span>
            </Nav.Link>
            </Nav> 

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {/* Profilo Dropdown */}
            <Nav.Link href="#profile" className="text-center mx-2 d-flex align-items-center">
              <img
                src="https://placecats.com/20/20"
                alt="Profilo"
                className="rounded-circle"
                width="20"
                height="20"
              />
              <NavDropdown
                title={<span className="d-none d-lg-inline">Profilo</span>}
                align="end"
                className="ms-2"
              >
                <NavDropdown.Item href="#action1">Opzione 1</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Opzione 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>

            {/* Per le aziende Dropdown */}
            <Nav.Link href="#work" className="text-center mx-2 d-flex align-items-center">
              <i className="bi bi-grid-3x3-gap-fill"></i>
              <NavDropdown
                title={<span className="d-none d-lg-inline">Per le aziende</span>}
                align="end"
                className="ms-2"
              >
                <NavDropdown.Item href="#action1">Servizi</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Strumenti</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            </Navbar.Collapse>
          
      </Container>
    </Navbar>
  );
}



export default LinkedinNavbar
