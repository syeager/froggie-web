import { Froggie } from "@Api";

export class Group {
  public readonly id: string;
  public readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export function createGroup(groupDto: Froggie.GroupDto) {
  const group = new Group(groupDto.id, groupDto.name);
  return group;
}
