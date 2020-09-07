import axios from '../tools/axios'

export const loginUser = async (email, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const result = await axios.post("/login", formData);

  return result.data.token;
}

export const logoutUser = async () => {
  return await axios.post("/logout").then(localStorage.removeItem('token')).then(window.location = "/login");
}

export const isLogged = () => {
  const res = localStorage.getItem('token') !== null ? true : false;
  console.log(res);

  return res;
}