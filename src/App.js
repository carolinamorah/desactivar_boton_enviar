import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [abled, setAbled] = useState(false);

  return (
      <form className="formulario">
        <Input setAbled={setAbled}/>
        <Button abled={abled}/>  
      </form>
    );
}

export default App;
