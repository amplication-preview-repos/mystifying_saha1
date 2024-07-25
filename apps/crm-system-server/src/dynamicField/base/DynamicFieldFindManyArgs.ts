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
import { DynamicFieldWhereInput } from "./DynamicFieldWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DynamicFieldOrderByInput } from "./DynamicFieldOrderByInput";

@ArgsType()
class DynamicFieldFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DynamicFieldWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DynamicFieldWhereInput, { nullable: true })
  @Type(() => DynamicFieldWhereInput)
  where?: DynamicFieldWhereInput;

  @ApiProperty({
    required: false,
    type: [DynamicFieldOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DynamicFieldOrderByInput], { nullable: true })
  @Type(() => DynamicFieldOrderByInput)
  orderBy?: Array<DynamicFieldOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DynamicFieldFindManyArgs as DynamicFieldFindManyArgs };