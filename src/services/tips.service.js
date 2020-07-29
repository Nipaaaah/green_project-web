import axios from '../tools/axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NjAxNzY1MywiZXhwIjoxNTk2MDIxMjUzLCJuYmYiOjE1OTYwMTc2NTMsImp0aSI6IlpZOUdoU2VjaXB3eVE3MGMiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.od-9BD4GwSBoEree2207X-rNuonhufr1g3mBuWrAdlg'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

const GetTips = async () => {
  let res = await axios.get("/allTips", config);
  return res;
}

const GetTip = async (id) => {
  let res = await axios.get(`/tip/${id}`, config);
  return res;
}

const EditTip = async (id, formData) => {
  let res = await axios.post(`/editTip/${id}`, formData, config);
  return res;
}

const DeleteTip = async (id) => {
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