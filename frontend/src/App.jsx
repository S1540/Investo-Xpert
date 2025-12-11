import { useState } from "react";
import Header from "./components/common/Header";
import HomePage from "./components/pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Footer from "./components/common/Footer";
import PropertyDetails from "./components/pages/Home/PropertyDetails";
import ScrollToTop from "./components/common/ScrollToTop";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
