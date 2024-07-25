/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { StageWhereUniqueInput } from "../../stage/base/StageWhereUniqueInput";
import { Type } from "class-transformer";
import { SchemeWhereUniqueInput } from "../../scheme/base/SchemeWhereUniqueInput";

@InputType()
class DynamicFieldUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  value?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => StageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StageWhereUniqueInput)
  @IsOptional()
  @Field(() => StageWhereUniqueInput, {
    nullable: true,
  })
  stage?: StageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SchemeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SchemeWhereUniqueInput)
  @IsOptional()
  @Field(() => SchemeWhereUniqueInput, {
    nullable: true,
  })
  scheme?: SchemeWhereUniqueInput | null;
}

export { DynamicFieldUpdateInput as DynamicFieldUpdateInput };