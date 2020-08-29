import axios from '../tools/axios'

/**
 * Query all tips
 */
const GetTips = async () => {
  let res = await axios.get("/allTips");
  return res;
}

/**
 * Query one tip
 * @param {int} id 
 */
const GetTip = async (id) => {
  let res = await axios.get(`/tip/${id}`);
  return res;
}

/**
 * Edit a tip
 * @param {int} id 
 * @param {array} formData 
 */
const EditTip = async (id, formData) => {
  let res = await axios.post(`/editTip/${id}`, formData);
  return res;
}

/**
 * Delete a tip
 * @param {int} id 
 */
const DeleteTip = async (id) => {
  let res = await axios.get(`/deleteTip/${id}`);
  return res;
}

/**
 * Add a tip
 * @param {array} formData 
 */
const AddTip = async (formData) => {
  let res = await axios.post(`/addTip`, formData)
  return res;
}

export {
  GetTips,
  GetTip,
  EditTip,
  DeleteTip,
  AddTip
}