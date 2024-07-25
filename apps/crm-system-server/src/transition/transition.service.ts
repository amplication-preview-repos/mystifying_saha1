import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransitionServiceBase } from "./base/transition.service.base";

@Injectable()
export class TransitionService extends TransitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
