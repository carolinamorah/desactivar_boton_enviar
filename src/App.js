import Input from "./components/Input";
import Button from "./components/Button";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
      <form className="formulario">
        <Input username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
        <Button username={username} password={password} />  
      </form>
    );
}

export default App;
