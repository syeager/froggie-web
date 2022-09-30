import * as FroggieApi from "@Api";
import * as Tasks from "@Tasks";
import { TaskCard } from "@Tasks";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState(undefined as undefined | Tasks.Task[]);

  useEffect(() => {
    const api = async () => {
      const client = new FroggieApi.Froggie.Client();
      const taskPage = await client.getTaskPage_GetPage(undefined, undefined);
      setTasks(taskPage.obj!.results!.map((dto) => Tasks.createTask(dto)));
    };
    api();
  }, []);

  const taskCards = tasks
    ? tasks.map((task, i) => <TaskCard key={i} task={task} />)
    : [<div key={-1}>loading</div>];

  return (
    <div>
      <h1 className="text-center">Welcome to Froggie! 🐸</h1>
      <Row className="w-75" xs={1}>
        {taskCards}
      </Row>
    </div>
  );
}
