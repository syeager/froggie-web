import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { Task } from "../models/task";
import { useSelector } from "react-redux";
import { RootState } from "@/froggie/app/state/store";
import { CompleteTaskCommand } from "../commands/CompleteTaskCommand";

type Props = {
  task: Task;
  onClose: () => void;
};

export function TaskDetails(props: Props): JSX.Element {
  const task = props.task;
  const groups = useSelector((state: RootState) => state.groups.groups);
  const group = groups.find((g) => g.id == task.groupId);

  const completeButton = task.isCompleted ? (
    <Button variant="outline-success" disabled>
      Completed
    </Button>
  ) : (
    <Button onClick={() => CompleteTaskCommand(task)} variant="success">
      Complete
    </Button>
  );

  return (
    <Modal show={true} onHide={props.onClose} keyboard={false}>
      <Modal.Body>
        <Form>
          <InputGroup>
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control type="text" value={task.title} readOnly />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Group</InputGroup.Text>
            <Form.Control type="text" value={group?.name} readOnly />
          </InputGroup>
          {completeButton}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
