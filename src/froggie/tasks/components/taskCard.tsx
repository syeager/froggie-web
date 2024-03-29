import { Task } from "@Tasks";
import { Card } from "react-bootstrap";

type Props = {
  task: Task;
};

export function TaskCard(props: Props): JSX.Element {
  const task = props.task;

  return (
    <Card className="w-100">
      <Card.Header>{task.title}</Card.Header>
      <Card.Body>
        <Card.Text>{task.id}</Card.Text>
      </Card.Body>
    </Card>
  );
}
