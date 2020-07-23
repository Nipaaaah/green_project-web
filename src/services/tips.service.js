import axios from '../tools/axios'

const GetTips = async () => {

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTY6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxMjg2MiwiZXhwIjoxNTk1NTE2NDYyLCJuYmYiOjE1OTU1MTI4NjIsImp0aSI6IkRQS04wa2tvSUJIeXFNbTQiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.lCCMBbSFNdsS9One7cTZo_Oh2YYIlD3v9lXWWJok8VY'
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  let res = await axios.get("/allTips", config);
  return res;
}

export {
  GetTips
}