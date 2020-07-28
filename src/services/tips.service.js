import axios from '../tools/axios'


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTc4NDk5NywiZXhwIjoxNTk1Nzg4NTk3LCJuYmYiOjE1OTU3ODQ5OTcsImp0aSI6IktTVU1pcFNuT3k0Zm1XRXAiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.SL0hNZMdT3Why5QPFGDB0G38kANGkRNALaLZIfxv4kQ'
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

const EditTip = async (formData) => {
  console.log(formData)
  // let res = await axios.post(`/editTip/${id}`, config);
  // return res;
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