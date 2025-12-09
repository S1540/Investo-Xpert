import { useState } from "react";
import Header from "./components/common/Header";
import HomePage from "./components/pages/Home/HomePage";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
