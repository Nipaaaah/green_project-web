import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login'
import './App.css';
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  const [isLogged, setIsLogged] = useState({});
  const [user, setUser] = useState({});

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
