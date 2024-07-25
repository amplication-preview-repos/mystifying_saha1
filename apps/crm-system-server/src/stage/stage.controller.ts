import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StageService } from "./stage.service";
import { StageControllerBase } from "./base/stage.controller.base";

@swagger.ApiTags("stages")
@common.Controller("stages")
export class StageController extends StageControllerBase {
  constructor(
    protected readonly service: StageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
