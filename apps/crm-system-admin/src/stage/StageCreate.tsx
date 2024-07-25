import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DynamicFieldTitle } from "../dynamicField/DynamicFieldTitle";
import { SchemeTitle } from "../scheme/SchemeTitle";

export const StageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="dynamicFields"
          reference="DynamicField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DynamicFieldTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="scheme.id" reference="Scheme" label="scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
