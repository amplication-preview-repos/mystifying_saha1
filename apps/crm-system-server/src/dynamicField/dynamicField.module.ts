import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DynamicFieldModuleBase } from "./base/dynamicField.module.base";
import { DynamicFieldService } from "./dynamicField.service";
import { DynamicFieldController } from "./dynamicField.controller";
import { DynamicFieldResolver } from "./dynamicField.resolver";

@Module({
  imports: [DynamicFieldModuleBase, forwardRef(() => AuthModule)],
  controllers: [DynamicFieldController],
  providers: [DynamicFieldService, DynamicFieldResolver],
  exports: [DynamicFieldService],
})
export class DynamicFieldModule {}
