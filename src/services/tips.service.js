import axios from '../tools/axios'

/**
 * Query all tips
 */
const GetTips = async () => {
  return await axios.get("/allTips");
}

/**
 * Query one tip
 * @param {int} id 
 */
const GetTip = async (id) => {
  return await axios.get(`/tip/${id}`);
}

/**
 * Edit a tip
 * @param {int} id 
 * @param {array} formData 
 */
const EditTip = async (id, formData) => {
  return await axios.post(`/editTip/${id}`, formData);
}

/**
 * Delete a tip
 * @param {int} id 
 */
const DeleteTip = async (id) => {
  return await axios.get(`/deleteTip/${id}`);
}

/**
 * Add a tip
 * @param {array} formData 
 */
const AddTip = async (formData) => {
  return await axios.post(`/addTip`, formData)
}

export {
  GetTips,
  GetTip,
  EditTip,
  DeleteTip,
  AddTip
}