
import './App.css';
import CenteredCard from './components/CenteredCard';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <CenteredCard><p>Children 1</p></CenteredCard>
        <CenteredCard><p>Children 2</p></CenteredCard>
        <CenteredCard><p>Children 3</p></CenteredCard>
      </div>
    </div>
  );
}

export default App;
