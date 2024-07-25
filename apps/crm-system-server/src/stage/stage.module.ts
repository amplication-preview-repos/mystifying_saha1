import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StageModuleBase } from "./base/stage.module.base";
import { StageService } from "./stage.service";
import { StageController } from "./stage.controller";
import { StageResolver } from "./stage.resolver";

@Module({
  imports: [StageModuleBase, forwardRef(() => AuthModule)],
  controllers: [StageController],
  providers: [StageService, StageResolver],
  exports: [StageService],
})
export class StageModule {}
