import { Froggie } from "@Api";
import { getUser } from "@/froggie/accounts/Index";
import { Group, createGroup } from "@/froggie/groups/Index";
import { FroggieClient } from "@/froggie/requests/FroggieClient";

export async function CreateGroupCommand(name: string): Promise<Group | null> {
  const userId = getUser()!.id;

  const request = new Froggie.CreateGroupRequest({
    creatorId: userId,
    name: name,
  });

  const response = await FroggieClient().createGroup_Create(request);
  if (!response.isError && response.obj) {
    const group = createGroup(response.obj);
    return group;
  }

  console.error(response.message);
  return null;
}
