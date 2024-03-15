import { Froggie } from "@Api";

export interface Task {
  readonly id: string;
  readonly title: string;
  readonly groupId: string;
}

export function createTask(taskDto: Froggie.TaskDto): Task {
  return {
    id: taskDto.id,
    title: taskDto.title,
    groupId: taskDto.groupId,
  };
}
