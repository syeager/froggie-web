import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export function NavBar(): JSX.Element {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="">
          <img
            src="/logo-192.png"
            width="30"
            height="30"
            className="d-inline-block aligh-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Groups">
              <NavDropdown.Divider />
              <NavDropdown.Item>Manage</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
