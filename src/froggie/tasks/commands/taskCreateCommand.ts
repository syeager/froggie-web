import { RequestManager } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";
import { createTask, Task, TaskCreateRequest } from "@Tasks";

export async function TaskCreateCommand(title: string): Promise<Task | null> {
  const request = new TaskCreateRequest(title);
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