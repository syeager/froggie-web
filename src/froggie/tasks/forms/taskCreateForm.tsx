import { Button, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { TaskCreateCommand } from "../commands/taskCreateCommand";

export function TaskCreateForm(): JSX.Element {
  const [title, setTitle] = useState("");

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (title == "") {
      alert("You need to enter a title!");
      return;
    }

    const task = await TaskCreateCommand(title);

    if (task) {
      setTitle("");
    } else {
      // TODO: Provide access to error message.
      alert("Failed to create task!");
    }
  };

  return (
    <Form>
      <Row>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add task title"
          value={title}
        />
        <Button onClick={onSubmit} type="submit" variant="primary">
          Add
        </Button>
      </Row>
    </Form>
  );
}
