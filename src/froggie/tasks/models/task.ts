import { Froggie } from "@Api";

export class Task {
  public readonly id: string;
  public readonly title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}

export function createTask(taskDto: Froggie.TaskDto) {
  const task = new Task(taskDto.id, taskDto.title);
  return task;
}
