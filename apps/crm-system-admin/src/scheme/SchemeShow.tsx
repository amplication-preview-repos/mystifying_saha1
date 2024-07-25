import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCHEME_TITLE_FIELD } from "./SchemeTitle";
import { STAGE_TITLE_FIELD } from "../stage/StageTitle";

export const SchemeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <ReferenceManyField reference="Stage" target="schemeId" label="Stages">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="scheme"
              source="scheme.id"
              reference="Scheme"
            >
              <TextField source={SCHEME_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DynamicField"
          target="schemeId"
          label="DynamicFields"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="value" source="value" />
            <ReferenceField label="stage" source="stage.id" reference="Stage">
              <TextField source={STAGE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="scheme"
              source="scheme.id"
              reference="Scheme"
            >
              <TextField source={SCHEME_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Application"
          target="schemeId"
          label="Applications"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="scheme"
              source="scheme.id"
              reference="Scheme"
            >
              <TextField source={SCHEME_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
