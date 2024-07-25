import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransitionService } from "./transition.service";
import { TransitionControllerBase } from "./base/transition.controller.base";

@swagger.ApiTags("transitions")
@common.Controller("transitions")
export class TransitionController extends TransitionControllerBase {
  constructor(
    protected readonly service: TransitionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
