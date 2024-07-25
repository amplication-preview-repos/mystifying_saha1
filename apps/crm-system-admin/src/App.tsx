import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StageList } from "./stage/StageList";
import { StageCreate } from "./stage/StageCreate";
import { StageEdit } from "./stage/StageEdit";
import { StageShow } from "./stage/StageShow";
import { SchemeList } from "./scheme/SchemeList";
import { SchemeCreate } from "./scheme/SchemeCreate";
import { SchemeEdit } from "./scheme/SchemeEdit";
import { SchemeShow } from "./scheme/SchemeShow";
import { TransitionList } from "./transition/TransitionList";
import { TransitionCreate } from "./transition/TransitionCreate";
import { TransitionEdit } from "./transition/TransitionEdit";
import { TransitionShow } from "./transition/TransitionShow";
import { DynamicFieldList } from "./dynamicField/DynamicFieldList";
import { DynamicFieldCreate } from "./dynamicField/DynamicFieldCreate";
import { DynamicFieldEdit } from "./dynamicField/DynamicFieldEdit";
import { DynamicFieldShow } from "./dynamicField/DynamicFieldShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRM System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Stage"
          list={StageList}
          edit={StageEdit}
          create={StageCreate}
          show={StageShow}
        />
        <Resource
          name="Scheme"
          list={SchemeList}
          edit={SchemeEdit}
          create={SchemeCreate}
          show={SchemeShow}
        />
        <Resource
          name="Transition"
          list={TransitionList}
          edit={TransitionEdit}
          create={TransitionCreate}
          show={TransitionShow}
        />
        <Resource
          name="DynamicField"
          list={DynamicFieldList}
          edit={DynamicFieldEdit}
          create={DynamicFieldCreate}
          show={DynamicFieldShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
