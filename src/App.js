import "./App.css";
import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App">
      {/* Hello CopperCodes */}
      {isLogin ? <Home /> : <Login setLogin={setLogin} />}
    </div>
  );
}

export default App;
