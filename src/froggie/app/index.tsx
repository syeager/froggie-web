import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import { TaskList } from "@/froggie/tasks/components/taskList";
import { Container } from "react-bootstrap";
import { LogInPage } from "../accounts/views/logInPage";

function App(): JSX.Element {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TaskList />} />
            <Route path="LogIn" element={<LogInPage />} />
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
