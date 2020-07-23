import axios from '../tools/axios'

export const getTips = async () => {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTY6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTQ5ODIzNSwiZXhwIjoxNTk1NTAxODM1LCJuYmYiOjE1OTU0OTgyMzUsImp0aSI6IjkyclhtSTRQSDJnaGVyME0iLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.Meyufqlw1v_EdagmADhWpeVt5JSUL9jmiJxbLSCQgH8'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const result = await axios.get("/allTips", config);
  console.log(result)
  return result
}