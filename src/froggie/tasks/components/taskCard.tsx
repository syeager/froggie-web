import { RootState } from "@/froggie/app/state/store";
import { Task } from "@Tasks";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

type Props = {
  task: Task;
};

export function TaskCard(props: Props): JSX.Element {
  const task = props.task;
  const groups = useSelector((state: RootState) => state.groups.groups);
  const group = groups.find((g) => g.id == task.groupId);

  return (
    <Card className="w-100">
      <Card.Header>{task.title}</Card.Header>
      <Card.Body>
        <Card.Text>{group?.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}
