import * as FroggieApi from "@Api";
import * as Tasks from "@Tasks";
import { TaskCard, TaskCreateForm } from "@Tasks";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

const updateIntervalMs = 1000;

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState(undefined as undefined | Tasks.Task[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const api = async () => {
        const client = new FroggieApi.Froggie.Client();
        const taskPage = await client.getTaskPage_GetPage(100, undefined);
        setTasks(taskPage.obj!.results!.map((dto) => Tasks.createTask(dto)));
      };
      api();
    }, updateIntervalMs);

    return () => clearInterval(interval);
  }, []);

  const taskCards = tasks
    ? tasks.map((task) => <TaskCard key={task.id} task={task} />)
    : [<div key={-1}>loading</div>];

  return (
    <div>
      <h1 className="text-center">Welcome to Froggie! 🐸</h1>
      <TaskCreateForm />
      <Row className="w-75" xs={1}>
        {taskCards}
      </Row>
    </div>
  );
}
