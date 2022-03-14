import { Toaster } from 'react-hot-toast';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App-header">
      <Toaster/>
      <Routes />
    </div>
  );
}

export default App;
