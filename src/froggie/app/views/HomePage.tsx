import { TaskList } from "../../tasks/components/TaskList";
import { CreateGroupForm } from "../../groups/views/CreateGroupForm";
import { Container } from "react-bootstrap";

export function HomePage(): JSX.Element {
  return (
    <Container>
      <CreateGroupForm />
      <TaskList />
    </Container>
  );
}
