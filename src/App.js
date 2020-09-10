import React from "react";
import LoginForm from "./components/LoginForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Event App</h1>
      <LoginForm />
    </div>
  );
}

export default App;
