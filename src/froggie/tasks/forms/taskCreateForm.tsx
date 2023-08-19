import { Button, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { TaskCreateCommand } from "../commands/taskCreateCommand";
// import { Group, GetUsersGroupCommand } from "@Groups";
import moment from "moment";
import { Group } from "@/froggie/groups";

export function TaskCreateForm(): JSX.Element {
  const [title, setTitle] = useState("");
  const [groupId, setGroupId] = useState("");
  const [dueDate, setDueDate] = useState(moment().add(2, "day"));
  // const [groups, setGroups] = useState([] as Group[]);
  const groups = [] as Group[];

  // useEffect(() => {
  //   const fetch = async () => {
  //     const usersGroups = await GetUsersGroupCommand();
  //     setGroups(usersGroups);
  //     setGroupId(usersGroups[0].id);
  //   };

  //   fetch();
  // }, []);

  const onSubmit = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();

    if (title == "") {
      alert("You need to enter a title!");
      return;
    }

    const task = await TaskCreateCommand(title, groupId, dueDate);

    if (task) {
      setTitle("");
    } else {
      // TODO: Provide access to error message.
      alert("Failed to create task!");
    }
  };

  const groupOptions = groups.map((group) => (
    <option key={group.id} value={group.id}>
      {group.name}
    </option>
  ));

  return (
    <Form>
      <Row>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add task title"
          value={title}
        />
        <Form.Select
          onChange={(e) => setGroupId(e.target.value)}
          value={groupId}
        >
          {groupOptions}
        </Form.Select>
        <Form.Control
          onChange={(e) => setDueDate(moment(e.target.value))}
          placeholder="Add due date"
          value={dueDate.toLocaleString()}
        />
        <Button onClick={onSubmit} type="submit" variant="primary">
          Add
        </Button>
      </Row>
    </Form>
  );
}
