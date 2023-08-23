import { RequestManager as RM } from "../../common/ApiRequestSystem/ApiRequestManager";
import { Froggie } from "../../generated/froggieClient";

export class FroggieRequestManager extends RM<Froggie.Client> {}
