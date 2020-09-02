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

export const addQuest = async (name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel)
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);

    const res = await axios.post('/addQuest', formData);
    console.log(res);

    return res;
}

export const editQuest = async (questId, name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel);
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);
    return await axios.post("editQuest/" + questId, formData)
}