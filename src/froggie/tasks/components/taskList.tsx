import { Task, TaskCard, TaskCreateForm, TaskPageCommand } from "@Tasks";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

const updateIntervalMs = 1000;

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState(undefined as undefined | Task[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const getTaskPage = async () => {
        const tasks = await TaskPageCommand();
        setTasks(tasks || []);
      };
      getTaskPage();
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
