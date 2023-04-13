import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskPageRequest extends FroggieRequest<Froggie.ApiResponseOfPageResponseOfTaskDto> {
  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfPageResponseOfTaskDto> {
    return await client.getTaskPage_GetPage(100, undefined);
  }
}
