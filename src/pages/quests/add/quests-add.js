import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

function AddQuest() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      Hello coucou Add quest here 
    </div>
  )
}

export default AddQuest;