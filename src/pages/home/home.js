import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <p>Hello Home</p>
    </div>
  )
}

export default Home;