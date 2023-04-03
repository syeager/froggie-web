import { getUser } from "@Accounts";
import { RequestManager } from "@/froggie/requests";
import { Froggie } from "@Api";
import { createTask, Task, TaskCreateRequest } from "@Tasks";

export async function TaskCreateCommand(
  title: string,
  groupId: string,
  dueDate: moment.Moment
): Promise<Task | null> {
  const userId = getUser()!.id;

  const request = new TaskCreateRequest(title, userId, groupId, dueDate);
  const response = await RequestManager.send(request);

  if (!(response instanceof Froggie.ApiResponseOfTaskDto)) {
    throw console.error("Unknown error while creating a Task.");
  }

  if (response.isError || !response.obj) {
    console.error(response.message);
    return null;
  }

  const task = createTask(response.obj);
  return task;
}
