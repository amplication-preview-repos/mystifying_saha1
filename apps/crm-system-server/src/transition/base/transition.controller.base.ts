/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TransitionService } from "../transition.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TransitionCreateInput } from "./TransitionCreateInput";
import { Transition } from "./Transition";
import { TransitionFindManyArgs } from "./TransitionFindManyArgs";
import { TransitionWhereUniqueInput } from "./TransitionWhereUniqueInput";
import { TransitionUpdateInput } from "./TransitionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TransitionControllerBase {
  constructor(
    protected readonly service: TransitionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transition })
  @nestAccessControl.UseRoles({
    resource: "Transition",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTransition(
    @common.Body() data: TransitionCreateInput
  ): Promise<Transition> {
    return await this.service.createTransition({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceStage: true,
        destinationStage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Transition] })
  @ApiNestedQuery(TransitionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Transition",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transitions(@common.Req() request: Request): Promise<Transition[]> {
    const args = plainToClass(TransitionFindManyArgs, request.query);
    return this.service.transitions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceStage: true,
        destinationStage: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transition",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async transition(
    @common.Param() params: TransitionWhereUniqueInput
  ): Promise<Transition | null> {
    const result = await this.service.transition({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sourceStage: true,
        destinationStage: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transition",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTransition(
    @common.Param() params: TransitionWhereUniqueInput,
    @common.Body() data: TransitionUpdateInput
  ): Promise<Transition | null> {
    try {
      return await this.service.updateTransition({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sourceStage: true,
          destinationStage: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Transition",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTransition(
    @common.Param() params: TransitionWhereUniqueInput
  ): Promise<Transition | null> {
    try {
      return await this.service.deleteTransition({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sourceStage: true,
          destinationStage: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}