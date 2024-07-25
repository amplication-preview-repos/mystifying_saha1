import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DynamicFieldServiceBase } from "./base/dynamicField.service.base";

@Injectable()
export class DynamicFieldService extends DynamicFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
