import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StageListRelationFilter } from "../stage/StageListRelationFilter";
import { DynamicFieldListRelationFilter } from "../dynamicField/DynamicFieldListRelationFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";

export type SchemeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  stages?: StageListRelationFilter;
  dynamicFields?: DynamicFieldListRelationFilter;
  applications?: ApplicationListRelationFilter;
};
