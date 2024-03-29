import { Form, InputGroup, Modal } from "react-bootstrap";
import { Task } from "../models/task";
import { useSelector } from "react-redux";
import { RootState } from "@/froggie/app/state/store";

type Props = {
  task: Task;
  onClose: () => void;
};

export function TaskDetails(props: Props): JSX.Element {
  const task = props.task;
  const groups = useSelector((state: RootState) => state.groups.groups);
  const group = groups.find((g) => g.id == task.groupId);

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
          <InputGroup>
            <InputGroup.Text>Completed</InputGroup.Text>
            <Form.Check checked={task.isCompleted} readOnly />
          </InputGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
