import { Task, TaskCard, TaskPageCommand } from "@/froggie/tasks/Index";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { TaskDetails } from "./TaskDetails";

const updateIntervalMs = 1000;

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState(undefined as undefined | Task[]);
  const [selectedTask, setSelectedTask] = useState(
    undefined as Task | undefined
  );
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

  const taskDetails = selectedTask ? (
    <TaskDetails
      task={selectedTask}
      onClose={() => setSelectedTask(undefined)}
    />
  ) : (
    <></>
  );

  const taskCards = tasks
    ? tasks.map((task) => (
        <TaskCard key={task.id} task={task} onClick={setSelectedTask} />
      ))
    : [<div key={-1}>loading</div>];

  return (
    <>
      {taskDetails}
      <Stack className="mx-auto">{taskCards}</Stack>
    </>
  );
}
