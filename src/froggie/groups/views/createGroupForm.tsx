import { Button, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { CreateGroupCommand } from "@Groups";

export function CreateGroupForm(): JSX.Element {
  const [name, setName] = useState("");

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (name == "") {
      alert("You need to name the group!");
      return;
    }

    const group = await CreateGroupCommand(name);
    alert(`Group '${group!.name}' has been created 🥳`);
  };

  return (
    <Form>
      <Row>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          placeholder="Group's Name"
          value={name}
        />
      </Row>
      <Row>
        <Button onClick={onSubmit} type="submit" variant="primary">
          Create
        </Button>
      </Row>
    </Form>
  );
}
