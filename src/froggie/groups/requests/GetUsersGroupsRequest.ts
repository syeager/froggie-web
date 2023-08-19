// import { FroggieRequest } from "@/froggie/requests";
// import { Froggie } from "@/generated/froggieClient";

// export class GetUsersGroupRequest extends FroggieRequest<Froggie.ApiResponseOfGroupDtoOf> {
//   private readonly userId: string;

//   constructor(userId: string) {
//     super();
//     this.userId = userId;
//   }

//   protected executeInternal(
//     client: Froggie.Client
//   ): Promise<Froggie.ApiResponseOfGroupDtoOf> {
//     return client.getUserGroups_GetGroups(this.userId);
//   }
// }
