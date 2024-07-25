import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STAGE_TITLE_FIELD } from "../stage/StageTitle";
import { SCHEME_TITLE_FIELD } from "../scheme/SchemeTitle";

export const DynamicFieldList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DynamicFields"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="scheme" source="scheme.id" reference="Scheme">
          <TextField source={SCHEME_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
