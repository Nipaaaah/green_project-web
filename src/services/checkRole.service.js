import axios from '../tools/axios'

export const checkRole = async (token) => {

  return await axios.get("/checkRole", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}