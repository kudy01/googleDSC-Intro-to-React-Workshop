import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    setFirstName("John");
  }, []);

  return (
    <div className="App">
      <h1>Hello {firstName}</h1>
    </div>
  );
};

export default App;
