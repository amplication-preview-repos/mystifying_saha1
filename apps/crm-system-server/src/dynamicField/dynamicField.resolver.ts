import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DynamicFieldResolverBase } from "./base/dynamicField.resolver.base";
import { DynamicField } from "./base/DynamicField";
import { DynamicFieldService } from "./dynamicField.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DynamicField)
export class DynamicFieldResolver extends DynamicFieldResolverBase {
  constructor(
    protected readonly service: DynamicFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
