import axios from '../tools/axios'

export const loginUser = async () => {
  const formData = new FormData();
  formData.append('email', 'toto@mail.com');
  formData.append('password', 'toto');

  const result = await axios.post("/login", formData);

  return result;
}