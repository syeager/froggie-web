import { Button, Form, Row } from "react-bootstrap";
import * as FroggieApi from "@Api";
import { useState } from "react";

export function TaskCreateForm(): JSX.Element {
  const [title, setTitle] = useState("");

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (title == "") {
      alert("You need to enter a title!");
      return;
    }

    const client = new FroggieApi.Froggie.Client();
    const request = new FroggieApi.Froggie.CreateTaskRequest({ title });
    const response = await client.createTask_Create(request);

    if (response.isError) {
      alert(response.message);
    } else {
      setTitle("");
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
