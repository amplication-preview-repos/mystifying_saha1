import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StageTitle } from "../stage/StageTitle";
import { SchemeTitle } from "../scheme/SchemeTitle";

export const DynamicFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <ReferenceInput source="stage.id" reference="Stage" label="stage">
          <SelectInput optionText={StageTitle} />
        </ReferenceInput>
        <ReferenceInput source="scheme.id" reference="Scheme" label="scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
