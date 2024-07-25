/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DynamicFieldWhereUniqueInput } from "./DynamicFieldWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DynamicFieldUpdateInput } from "./DynamicFieldUpdateInput";

@ArgsType()
class UpdateDynamicFieldArgs {
  @ApiProperty({
    required: true,
    type: () => DynamicFieldWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DynamicFieldWhereUniqueInput)
  @Field(() => DynamicFieldWhereUniqueInput, { nullable: false })
  where!: DynamicFieldWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DynamicFieldUpdateInput,
  })
  @ValidateNested()
  @Type(() => DynamicFieldUpdateInput)
  @Field(() => DynamicFieldUpdateInput, { nullable: false })
  data!: DynamicFieldUpdateInput;
}

export { UpdateDynamicFieldArgs as UpdateDynamicFieldArgs };