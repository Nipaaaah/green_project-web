import axios from '../tools/axios'

const GetTips = async () => {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTU3Njg3OSwiZXhwIjoxNTk1NTgwNDc5LCJuYmYiOjE1OTU1NzY4NzksImp0aSI6IlRmZFE4VU5pcHR6ekNkbHIiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.VAaHOL74BAMT-2JUp66VlT0Y0vmLcyOFASDW47ltG28'
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