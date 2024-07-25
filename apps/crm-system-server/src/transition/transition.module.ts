import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransitionModuleBase } from "./base/transition.module.base";
import { TransitionService } from "./transition.service";
import { TransitionController } from "./transition.controller";
import { TransitionResolver } from "./transition.resolver";

@Module({
  imports: [TransitionModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransitionController],
  providers: [TransitionService, TransitionResolver],
  exports: [TransitionService],
})
export class TransitionModule {}
