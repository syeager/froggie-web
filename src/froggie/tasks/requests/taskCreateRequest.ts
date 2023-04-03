import { FroggieRequest } from "@/froggie/requests";
import { Froggie } from "@/generated/froggieClient";

export class TaskCreateRequest extends FroggieRequest<Froggie.ApiResponseOfTaskDto> {
  private readonly title: string;
  private readonly creatorId: string;
  private readonly groupId: string;
  private readonly dueDate: moment.Moment;

  constructor(
    title: string,
    creatorId: string,
    groupId: string,
    dueDate: moment.Moment
  ) {
    super();
    this.title = title;
    this.creatorId = creatorId;
    this.groupId = groupId;
    this.dueDate = dueDate;
  }

  protected async executeInternal(
    client: Froggie.Client
  ): Promise<Froggie.ApiResponseOfTaskDto> {
    const request = new Froggie.CreateTaskRequest({
      title: this.title,
      creatorId: this.creatorId,
      groupId: this.groupId,
      dueDate: this.dueDate,
    });

    return await client.createTask_Create(request);
  }
}
