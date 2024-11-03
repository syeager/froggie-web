import { RequestManager } from "@/froggie/requests/Index";
import { Froggie } from "@Api";
import { getUser } from "@/froggie/accounts/Index";
import { Group, GetUsersGroupRequest, createGroup } from "@/froggie/groups/Index";

export async function GetUsersGroupCommand(): Promise<Array<Group>> {
  const userId = getUser()!.id;

  const request = new GetUsersGroupRequest(userId);
  const response = await RequestManager.send(request);

  if (!(response instanceof Froggie.ApiResponseOfGroupDtoOf)) {
    throw console.error("Unknown error while getting a user's groups.");
  }

  if (response.isError || !response.obj) {
    throw console.error(response.message);
  }

  const groups = response.obj.map((dto) => createGroup(dto!));
  return groups;
}
