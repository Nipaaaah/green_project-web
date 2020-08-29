import axios from '../tools/axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5ODcxMDY2NywiZXhwIjoxNTk4NzE0MjY3LCJuYmYiOjE1OTg3MTA2NjcsImp0aSI6ImlRekNWQ3o2UXRIUTg1YmwiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.oK5R0Fk1qPHHn5X9DSB3Fxe992mHpjtFi6Z2gYOIDw8'
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