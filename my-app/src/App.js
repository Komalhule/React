import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setmode] = useState("light");


  const handleMode=()=>{
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    
    }
  }
  return (
    <>
      <Navbar  mode={mode} handleMode={handleMode}/>
      <Home  mode={mode} />
    </>
  );
}

export default App;
