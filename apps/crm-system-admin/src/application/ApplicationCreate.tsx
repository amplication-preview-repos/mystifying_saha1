import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SchemeTitle } from "../scheme/SchemeTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="scheme.id" reference="Scheme" label="scheme">
          <SelectInput optionText={SchemeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
