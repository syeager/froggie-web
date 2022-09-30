import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TaskList } from "@/_temp/taskList";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TaskList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
