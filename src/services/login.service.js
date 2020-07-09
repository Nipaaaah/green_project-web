import axios from '../tools/axios'

export const loginUser = async (email, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const result = await axios.post("/login", formData);

  return result.data.token;
}