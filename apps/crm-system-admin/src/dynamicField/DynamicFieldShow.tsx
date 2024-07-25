import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STAGE_TITLE_FIELD } from "../stage/StageTitle";
import { SCHEME_TITLE_FIELD } from "../scheme/SchemeTitle";

export const DynamicFieldShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="value" source="value" />
        <ReferenceField label="stage" source="stage.id" reference="Stage">
          <TextField source={STAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="scheme" source="scheme.id" reference="Scheme">
          <TextField source={SCHEME_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
