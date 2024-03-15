import { Froggie } from "@Api";

export interface Group {
  readonly id: string;
  readonly name: string;
}

export function createGroup(groupDto: Froggie.GroupDto): Group {
  return {
    id: groupDto.id,
    name: groupDto.name,
  };
}
