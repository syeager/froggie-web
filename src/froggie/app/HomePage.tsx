import { TaskList } from "../tasks/components/taskList";
import { CreateGroupForm } from "../groups/views/createGroupForm";
import { NavBar } from "./NavBar";
import { Container } from "react-bootstrap";
import { Footer } from "./views/Footer";

export function HomePage(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <CreateGroupForm />
      <TaskList />
      <Footer />
    </Container>
  );
}
