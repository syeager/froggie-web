import { Container } from "react-bootstrap";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export function Layout(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
}
