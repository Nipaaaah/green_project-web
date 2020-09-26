import axios from '../tools/axios'

export const checkRole = async (token) => {

  return await axios.get("/checkRole/1", {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}