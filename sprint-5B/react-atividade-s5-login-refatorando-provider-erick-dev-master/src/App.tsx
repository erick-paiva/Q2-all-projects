import { Toaster } from "react-hot-toast";
import "./App.css";
import { Routes } from "./Routes/Index";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes />
    </div>
  );
}

export default App;
