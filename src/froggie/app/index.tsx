import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LogInPage, LogInPath, RegisterPage, RegisterPath } from "@Accounts";
import { HomePage } from "./views/HomePage";
import { useEffect } from "react";
import { AppDispatch } from "@/froggie/app/state/store";
import { useDispatch } from "react-redux";
import { getUsersGroupsAsync } from "@/froggie/groups/store";
import { ManageGroupsPage } from "../groups/views/ManageGroupsPage";
import { Layout } from "./views/Layout";

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
          <Route path="/groups/" element={<Layout />}>
            <Route index element={<ManageGroupsPage />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
