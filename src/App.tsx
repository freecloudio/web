import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import apps from "./appindex";
import AppBar from "./components/AppBar";
import Box from "./components/Box";
import LoginPage from "./components/LoginPage";
import RequireAuth from "./components/RequireAuth";
import Spinner from "./components/Spinner";
import "./index.css";

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
      <Routes>
        <Route
          path="/apps/*"
          element={
            <Routes>
              <Route
                path="files/*"
                element={
                  <RequireAuth
                    wantedRoute={apps.files.routePrefix}
                    redirectTo="/login"
                  >
                    <Box direction="col" justify="center">
                      <AppBar />
                      <Main>
                        <Suspense fallback={<WholeScreenSpinner />}>
                          <Files />
                        </Suspense>
                      </Main>
                    </Box>
                  </RequireAuth>
                }
              />
            </Routes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/apps/files" />} />
      </Routes>
    </Router>
  );
}

export default App;
