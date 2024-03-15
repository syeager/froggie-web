import { TaskList } from "../tasks/components/taskList";
import { CreateGroupForm } from "../groups/views/createGroupForm";
import { NavBar } from "./NavBar";

export function HomePage(): JSX.Element {
  return (
    <>
      <NavBar />
      <CreateGroupForm />
      <TaskList />
    </>
  );
}
