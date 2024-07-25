import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TransitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="sourceStage" source="sourceStage" />
        <TextInput label="destinationStage" source="destinationStage" />
      </SimpleForm>
    </Edit>
  );
};
