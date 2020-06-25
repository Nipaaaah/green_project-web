import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../../services/login.service';
import { AuthContext } from '../../contexts/AuthContext';

const Login = props => {
  const { register, handleSubmit, errors } = useForm();
  const setToken = useContext(AuthContext);

  const onSubmit = async (formData) => {
    try {
      const res = await loginUser(formData.email, formData.password);
      console.log(res);

      setToken(res);

      //Redirige vers l'url '/'
      props.history.push('/');
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Login</p>

      {/* handleSubmit permet de faire une vérif avant de submit, c'est une fonction interne à React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* register permet de stocker automatiquement les données qu'on entre dans les inputs, on les récupère dans la méthode onSubmit */}
        {/* On peut aussi mettre des validators dans la méthode register */}
        <input name="email" defaultValue="toto@mail.com" ref={register({ required: true })} />

        {/* Ici on peut afficher les erreur en utilisant errors.*nomDuChamp* */}
        {/* La syntaxe ci-dessous est une condition -> S'il y a un erreur dans le champ email ALORS on affiche le <span> */}
        {errors.email && <span>This field is required</span>}

        <input name="password" defaultValue="toto" ref={register({ required: true })} />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;