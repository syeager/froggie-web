import { TaskList } from "../tasks/components/taskList";
import { CreateGroupForm } from "../groups/views/createGroupForm";

export function HomePage(): JSX.Element {
  return (
    <>
      <h1 className="text-center">Welcome to Froggie! 🐸</h1>
      <CreateGroupForm />
      <TaskList />
    </>
  );
}
