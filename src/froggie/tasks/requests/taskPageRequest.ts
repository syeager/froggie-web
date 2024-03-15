import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskPageRequest extends FroggieRequest<Froggie.ApiResponseOfPageOfTaskDto> {
  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfPageOfTaskDto> {
    return await client.getTaskPage_GetPage(100, undefined);
  }
}
