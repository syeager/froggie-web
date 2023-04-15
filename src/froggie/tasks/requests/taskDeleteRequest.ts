import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskDeleteRequest extends FroggieRequest<Froggie.ApiResponse> {
  private readonly id: string;

  constructor(id: string) {
    super();
    this.id = id;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponse> {
    const request = new Froggie.DeleteTaskRequest({
      id: this.id,
    });

    return await client.deleteTask_Delete(request);
  }
}
