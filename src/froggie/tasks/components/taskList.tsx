import { Task, TaskCard, TaskPageCommand } from "@Tasks";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";

const updateIntervalMs = 1000;

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState(undefined as undefined | Task[]);
  const [poll, setPoll] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const getTaskPage = async () => {
        const tasks = await TaskPageCommand();
        if (tasks == null) {
          setPoll(false);
        } else {
          setTasks(tasks);
        }
      };
      getTaskPage();
    }, updateIntervalMs);

    return () => {
      if (poll) {
        clearInterval(interval);
      }
    };
  }, []);

  const taskCards = tasks
    ? tasks.map((task) => <TaskCard key={task.id} task={task} />)
    : [<div key={-1}>loading</div>];

  return <Stack className="mx-auto">{taskCards}</Stack>;
}
