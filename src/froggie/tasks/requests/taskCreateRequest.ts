import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskCreateRequest extends FroggieRequest<Froggie.ApiResponseOfTaskDto> {
  private readonly title: string;
  private readonly creatorId: string;

  constructor(title: string, creatorId: string) {
    super();
    this.title = title;
    this.creatorId = creatorId;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfTaskDto> {
    const request = new Froggie.CreateTaskRequest({
      title: this.title,
      creatorId: this.creatorId,
    });

    return await client.createTask_Create(request);
  }
}
