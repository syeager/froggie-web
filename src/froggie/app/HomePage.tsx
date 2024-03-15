import { TaskList } from "../tasks/components/taskList";
import { CreateGroupForm } from "../groups/views/createGroupForm";

export function HomePage(): JSX.Element {
  return (
    <>
      <CreateGroupForm />
      <TaskList />
    </>
  );
}
