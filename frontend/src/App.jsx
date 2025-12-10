import { useState } from "react";
import Header from "./components/common/Header";
import HomePage from "./components/pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
