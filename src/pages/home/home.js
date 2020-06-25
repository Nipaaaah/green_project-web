import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {

  const { token } = useContext(AuthContext);

  console.log('token', token);

  return (
    <div>
      <p>Hello Home</p>
      <p>Token: {token}</p>
    </div>
  )
}

export default Home;