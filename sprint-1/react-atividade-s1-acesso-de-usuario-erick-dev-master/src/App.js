
import './App.css';
import { useState } from 'react';
import RestrictedPage from './components/RestrictedPage';

function App() {
  const user = "Erick"
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Login = () => {
    setIsLoggedIn(false)
  }
  const Logout = () => {
    setIsLoggedIn(true)
  }
  
  
  return (
    <div className="App-header">
      <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout} />
    </div>
    
  );
}

export default App;
