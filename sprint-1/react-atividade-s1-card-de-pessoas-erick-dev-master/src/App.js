import './App.css';
import Developer from "./components/Developer"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Developer className="Erick div" name="Erick" age="18" country="Brasil" />
        <Developer className="Maria div" name="Maria" age="22" country="Brasil" />
        <Developer className="Steve div" name="Steve" age="25" country="USA" />
      </div>
    </div>
  );
}

export default App;
