import { Task } from "@Tasks";
import { Button, Card } from "react-bootstrap";
import { TaskDeleteCommand } from "../commands/taskDeleteCommand";

type Props = {
  task: Task;
};

async function DeleteTask(id: string) {
  const x = await TaskDeleteCommand(id);

  if (!x) {
    console.log("response is null");
  }
}

export function TaskCard(props: Props): JSX.Element {
  const task = props.task;

  return (
    <Card className="w-100">
      <Card.Header>
        {task.title}
        <Button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => DeleteTask(task.id)}
        />
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.id}</Card.Text>
      </Card.Body>
    </Card>
  );
}
