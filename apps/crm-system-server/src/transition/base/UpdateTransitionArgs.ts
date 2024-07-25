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
import { TransitionWhereUniqueInput } from "./TransitionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TransitionUpdateInput } from "./TransitionUpdateInput";

@ArgsType()
class UpdateTransitionArgs {
  @ApiProperty({
    required: true,
    type: () => TransitionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransitionWhereUniqueInput)
  @Field(() => TransitionWhereUniqueInput, { nullable: false })
  where!: TransitionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TransitionUpdateInput,
  })
  @ValidateNested()
  @Type(() => TransitionUpdateInput)
  @Field(() => TransitionUpdateInput, { nullable: false })
  data!: TransitionUpdateInput;
}

export { UpdateTransitionArgs as UpdateTransitionArgs };
