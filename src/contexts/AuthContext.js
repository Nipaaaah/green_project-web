import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
  const [token, setToken] = useState('Banane');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  )
}

