import axios from '../tools/axios'


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTc2OTczMywiZXhwIjoxNTk1NzczMzMzLCJuYmYiOjE1OTU3Njk3MzMsImp0aSI6IkswZjlvUmFldVI3bXp2VUsiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.S12BetSPJVqNCqxGJQG8pSs81pX8lLGt6zRAKc9kTzc'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const GetTips = async () => {
  let res = await axios.get("/allTips", config);
  console.log(res.data.tips)
  return res;
}

const GetTip = async (id) => {
  let res = await axios.get(`/tip/${id}`, config);
  return res;
}

const EditTip = async (id) => {
  let res = await axios.post(`/editTip/${id}`, config);
  return res;
}

const DeleteTip = async (id) => {
  console.log(id)
  let res = await axios.get(`/deleteTip/${id}`, config);
  return res;
}

const AddTip = async (formData) => {
  let res = await axios.post(`/addTip`, formData, config)
  return res;
}


export {
  GetTips,
  GetTip,
  EditTip,
  DeleteTip,
  AddTip
}