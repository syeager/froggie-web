import { FroggieClient } from "@/froggie/requests/FroggieClient";
import { Task, createTask } from "../models/task";
import { Froggie } from "@/generated/froggieClient";

export async function CompleteTaskCommand(task: Task): Promise<Task> {
  const request = new Froggie.CompleteTaskRequest({ taskId: task.id });
  const response = await FroggieClient().completeTask_Complete(request);

  if (!response.isError && response.obj) {
    task = createTask(response.obj);
  } else {
    console.error(response.message);
  }

  return task;
}
