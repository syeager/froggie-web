import { RequestManager } from "@/froggie/requests";
import { createTask, Task, TaskPageRequest } from "@Tasks";

export async function TaskPageCommand(): Promise<Task[] | null> {
  const request = new TaskPageRequest();
  const response = await RequestManager.send(request);

  if (response.isError || !response.obj) {
    console.error(response.message);
    return null;
  }

  const tasks = response.obj.results?.map(createTask) ?? null;
  return tasks;
}
