import { Froggie } from "@Api";

export interface Group {
  id: string;
  name: string;
}

export function createGroup(groupDto: Froggie.GroupDto): Group {
  return groupDto;
}
