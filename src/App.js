import { Container as MuiContainer, LinearProgress } from "@material-ui/core";
import styled from "styled-components";
import Header from "components/header";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerPage } from "ui";

import * as routes from "routes";

const ContainerContent = styled(MuiContainer)`
  display: flex;
  min-height: 90vh;
`;

const MainPage = lazy(() => import("pages/main"));

const App = () => {
  return (
    <ContainerPage>
      <Header />
      <ContainerContent>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path={routes.HOME} component={MainPage} />
          </Switch>
        </Suspense>
      </ContainerContent>
    </ContainerPage>
  );
};
export default App;
