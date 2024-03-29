import { Froggie } from "@Api";

export interface Task {
  readonly id: string;
  readonly title: string;
  readonly groupId: string;
  readonly isCompleted: boolean;
}

export function createTask(taskDto: Froggie.TaskDto): Task {
  return {
    id: taskDto.id,
    title: taskDto.title,
    groupId: taskDto.groupId,
    isCompleted: taskDto.isCompleted,
  };
}
