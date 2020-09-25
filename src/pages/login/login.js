import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../../services/login.service';
import {checkRole} from "../../services/checkRole.service";

const Login = props => {
  const [authErrors, setAuthErrors] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (formData) => {
    try {
      //On appelle la fonction pour se log et on stocke le token dans le Contexte lié à l'authentification
      const res = await loginUser(formData.email, formData.password);
      const isAdmin = await checkRole(res);
      if(isAdmin){
        localStorage.setItem('token', res)
      }
      //Redirige vers l'url '/'
      window.location = "/";
    }
    catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setAuthErrors(['Identifiants incorrects'])
      }
    }
  };

  return (
      <div>
        <p>Login</p>

        {/* handleSubmit permet de faire une vérif avant de submit, c'est une fonction interne à React Hook Form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* register permet de stocker automatiquement les données qu'on entre dans les inputs, on les récupère dans la méthode onSubmit */}
          {/* On peut aussi mettre des validators dans la méthode register */}
          <input name="email" defaultValue="test@mail.com" ref={register({ required: true })} />

          {/* Ici on peut afficher les erreur en utilisant errors.*nomDuChamp* */}
          {/* La syntaxe ci-dessous est une condition -> S'il y a un erreur dans le champ email ALORS on affiche le <span> */}
          {errors.email && <span>Ce champ est requis</span>}

          <input name="password" defaultValue="password" ref={register({ required: true })} />
          {errors.password && <span>Ce champ est requis</span>}

          <input type="submit" />
        </form>

        {authErrors && <p>{authErrors}</p>}
      </div>
  )
}

export default Login;