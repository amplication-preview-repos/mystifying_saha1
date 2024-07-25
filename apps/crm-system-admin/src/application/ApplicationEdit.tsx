import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SchemeTitle } from "../scheme/SchemeTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="scheme.id" reference="Scheme" label="scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
