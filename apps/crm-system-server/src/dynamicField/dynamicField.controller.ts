import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DynamicFieldService } from "./dynamicField.service";
import { DynamicFieldControllerBase } from "./base/dynamicField.controller.base";

@swagger.ApiTags("dynamicFields")
@common.Controller("dynamicFields")
export class DynamicFieldController extends DynamicFieldControllerBase {
  constructor(
    protected readonly service: DynamicFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
