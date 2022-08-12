import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Welcome to Froggie! 🐸</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
