import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskCreateRequest extends FroggieRequest<Froggie.ApiResponseOfTaskDto> {
  private readonly title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfTaskDto> {
    const request = new Froggie.CreateTaskRequest({
      title: this.title,
    });

    return await client.createTask_Create(request);
  }
}
