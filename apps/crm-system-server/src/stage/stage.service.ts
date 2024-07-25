import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StageServiceBase } from "./base/stage.service.base";

@Injectable()
export class StageService extends StageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
