import { lazy, Suspense } from "react";
import "./index.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import apps from "./appindex";
import AppBar from "./components/AppBar";
import Spinner from "./components/Spinner";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Box from "./components/Box";

const Files = lazy(() => import("./apps/files/Files"));

const Main = styled.main`
  overflow-x: hidden;
  overflow-y: hidden;
  height: 100%;
  width: 100vw;
`;

const WholeScreenSpinner = () => (
  <Box>
    <Spinner large />
  </Box>
);

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path={apps.files.routePrefix}>
          <Box direction="col" justify="center">
            <AppBar />
            <Main>
              <Suspense fallback={<WholeScreenSpinner />}>
                <Files />
              </Suspense>
            </Main>
          </Box>
        </ProtectedRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Redirect to={{ pathname: apps.files.routePrefix }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
