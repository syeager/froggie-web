import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TaskList } from "@/froggie/tasks/components/taskList";
import { Container } from "react-bootstrap";

function App(): JSX.Element {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
