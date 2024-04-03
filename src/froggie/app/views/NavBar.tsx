import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { getUser } from "../../accounts";
import { NavLink } from "react-router-dom";

export function NavBar(): JSX.Element {
  const user = getUser();
  const buttons = user ? (
    <Nav>
      <NavDropdown title="Groups">
        <NavDropdown.Divider />
        <NavDropdown.Item>Manage</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={user.name}>
        <NavDropdown.Divider />
        <NavDropdown.Item>Manage</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  ) : (
    <Nav>
      <NavLink to={""} title="Log In" />
      <NavLink to={""} title="Register" />
    </Nav>
  );
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
        <Navbar.Collapse className="justify-content-end">
          {buttons}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
