import { Container, LinearProgress } from "@material-ui/core";
import Header from "components/header";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerPage } from "ui";

import * as routes from "routes";

const MainPage = lazy(() => import("pages/main"));

const App = () => {
  return (
    <ContainerPage>
      <Header />
      <Container>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path={routes.HOME} component={MainPage} />
          </Switch>
        </Suspense>
      </Container>
    </ContainerPage>
  );
};
export default App;
