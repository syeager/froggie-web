import { FroggieClient } from "@/froggie/requests/FroggieClient";
import { createTask, Task } from "@Tasks";

export async function TaskPageCommand(
  size = 100,
  page = 0
): Promise<Task[] | null> {
  const response = await FroggieClient().getTaskPage_GetPage(page, size);

  if (!response.isError && response.obj) {
    const tasks = response.obj.results?.map(createTask) ?? null;
    return tasks;
  }

  console.error(response.message);
  return null;
}
