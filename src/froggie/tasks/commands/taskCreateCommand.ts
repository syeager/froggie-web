import { getUser } from "@Accounts";
import { Froggie } from "@Api";
import { createTask, Task } from "@Tasks";
import { FroggieClient } from "@/froggie/requests/FroggieClient";

export async function TaskCreateCommand(
  title: string,
  groupId: string,
  dueDate: moment.Moment
): Promise<Task | null> {
  const creatorId = getUser()!.id;

  const request = new Froggie.CreateTaskRequest({
    title,
    creatorId,
    groupId,
    dueDate,
  });

  const response = await FroggieClient().createTask_Create(request);
  if (!response.isError && response.obj) {
    const task = createTask(response.obj);
    return task;
  }

  console.error(response.message);
  return null;
}
