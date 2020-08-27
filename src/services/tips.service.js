import axios from '../tools/axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODQ2MTg4MSwiZXhwIjoxNTk4NDY1NDgxLCJuYmYiOjE1OTg0NjE4ODEsImp0aSI6ImxTT21IdGVTQ2t2UTRKcFAiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.gHrCLSVSGLbO7WdNN7EpCMLT64XDP2NZCucuVF5ObbY'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

/**
 * Query all tips
 */
const GetTips = async () => {
  let res = await axios.get("/allTips", config);
  return res;
}

/**
 * Query one tip
 * @param {int} id 
 */
const GetTip = async (id) => {
  let res = await axios.get(`/tip/${id}`, config);
  return res;
}

/**
 * Edit a tip
 * @param {int} id 
 * @param {array} formData 
 */
const EditTip = async (id, formData) => {
  let res = await axios.post(`/editTip/${id}`, formData, config);
  return res;
}

/**
 * Delete a tip
 * @param {int} id 
 */
const DeleteTip = async (id) => {
  let res = await axios.get(`/deleteTip/${id}`, config);
  return res;
}

/**
 * Add a tip
 * @param {array} formData 
 */
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