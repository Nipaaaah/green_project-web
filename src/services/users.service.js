import axios from '../tools/axios'

/**
 * Query all tips
 */
const GetUsers = async () => {
    return await axios.get("/allUser");
}

/**
 * Edit a tip
 * @param {int} id 
 * @param {array} formData 
 */
const EditUser = async (id, formData) => {
    return await axios.post(`/editUser/${id}`, formData);
}

export {
    GetUsers,
    EditUser
}