import { RootState } from "@/froggie/app/state/store";
import { Task } from "@Tasks";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

type Props = {
  task: Task;
};

export function TaskCard(props: Props): JSX.Element {
  const task = props.task;
  const groups = useSelector((state: RootState) => state.groups.groups);
  const group = groups.find((g) => g.id == task.groupId);

  return (
    <Card>
      <Card.Body>
        <Card.Text>{task.title}</Card.Text>
        <Badge pill bg="primary">
          {group?.name}
        </Badge>
      </Card.Body>
    </Card>
  );
}
