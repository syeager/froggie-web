import { RequestManager } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";
import { TaskDeleteRequest } from "../requests/taskDeleteRequest";

export async function TaskDeleteCommand(
  id: string
): Promise<Froggie.ApiResponse> {
  const request = new TaskDeleteRequest(id);
  const response = await RequestManager.send(request);

  if (!(response instanceof Froggie.ApiResponse)) {
    throw console.error("Unknown error while deleting a task");
  }

  return response;
}
