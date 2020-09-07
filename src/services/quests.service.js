import axios from '../tools/axios'

export const getAllQuests = async () => {
    return await axios.get("/allQuests");
}

export const getOneQuest = async (questId) => {
    const res = await axios.get("quest/" + questId);

    return res.data.quest;
}

export const deleteQuest = async (questId) => {
    return await axios.get("deleteQuest/" + questId);
}

export const addQuest = async (questData) => {
    return await axios.post('/addQuest', questData);
}

export const editQuest = async (questId, data) => {
    return await axios.post(`editQuest/${questId}`, data);
}