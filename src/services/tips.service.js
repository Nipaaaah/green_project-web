import axios from '../tools/axios'

const GetTips = async () => {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTU4MDg5MiwiZXhwIjoxNTk1NTg0NDkyLCJuYmYiOjE1OTU1ODA4OTIsImp0aSI6IlI5Y0Y2enhTSWFGc1dXbmgiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.4VPMmdXP9a1cKTI8WgCoziZ93aMBW15ha3r56fReZY8'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  let res = await axios.get("/allTips", config);
  return res;
}

export {
  GetTips
}