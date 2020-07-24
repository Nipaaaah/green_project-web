import axios from '../tools/axios'


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTU5NzY5OSwiZXhwIjoxNTk1NjAxMjk5LCJuYmYiOjE1OTU1OTc2OTksImp0aSI6IktPN2xsU1dvQTVMNXFZV0QiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.HQ_7Y9kGlUoY84FzfsVWu8IaBQkRtUGNuZ3h68xr7_k'
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
  let res = await axios.get(`/deleteTip/${id}`, config);
  return res;
}

const AddTip = async (id) => {
  let res = await axios.post(`/addTip/${id}`, config);
  return res;
}


export {
  GetTips,
  GetTip,
  EditTip,
  DeleteTip,
  AddTip
}