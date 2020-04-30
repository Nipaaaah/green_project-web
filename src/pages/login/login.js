import React from 'react';
import { loginUser } from '../../services/login.service';

function Login() {

  loginUser();

  return (
    <div>
      <p>Hello Login</p>
    </div>
  )
}

export default Login;