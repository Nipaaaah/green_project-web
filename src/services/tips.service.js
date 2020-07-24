import axios from '../tools/axios'

const GetTips = async () => {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTU3NDExOCwiZXhwIjoxNTk1NTc3NzE4LCJuYmYiOjE1OTU1NzQxMTgsImp0aSI6IktJaTVCRTVEMkxkTWwyUWgiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.F5jzTK3-IbhYGD_Ljr6Ip-4f1fNE9aq9G-J34d0ahJA'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  let res = await axios.get("/allTips", config);
  console.log(res.data.tips)
  return res;
}

export {
  GetTips
}