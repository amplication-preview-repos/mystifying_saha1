import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TransitionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="sourceStage" source="sourceStage" />
        <TextInput label="destinationStage" source="destinationStage" />
      </SimpleForm>
    </Create>
  );
};
