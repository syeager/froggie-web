import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { LogInPage, LogInPath, RegisterPage, RegisterPath } from "@Accounts";
import { HomePage } from "./HomePage";
import { useEffect } from "react";
import { AppDispatch } from "@/froggie/app/state/store";
import { useDispatch } from "react-redux";
import { getUsersGroupsAsync } from "@/froggie/groups/store";

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsersGroupsAsync());
  }, []);

  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={LogInPath} element={<LogInPage />} />
            <Route path={RegisterPath} element={<RegisterPage />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

function Layout(): JSX.Element {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
