import { TaskList } from "../../tasks/components/taskList";
import { CreateGroupForm } from "../../groups/views/createGroupForm";
import { Container } from "react-bootstrap";

export function HomePage(): JSX.Element {
  return (
    <Container>
      <CreateGroupForm />
      <TaskList />
    </Container>
  );
}
