import axios from '../tools/axios'

export const getAllQuests = async () => {
    //le token sera à mettre dans axios
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTYwMDc1NCwiZXhwIjoxNTk1NjA0MzU0LCJuYmYiOjE1OTU2MDA3NTQsImp0aSI6IkNLSE51ZWxHU0hSc0xvcFIiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.jkxx4fb4nMX_v-DFlV7B0BrHk_Lw_isRHyYdoNb3bHU` }
    };
    const response = await axios.get("/allQuests", authorization);
    console.log(response)
    return response;
}

export const getOneQuest = async (questId) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUyNTQ1MiwiZXhwIjoxNTk1NTI5MDUyLCJuYmYiOjE1OTU1MjU0NTIsImp0aSI6IjJOeUljSHNjTWJvdDR3S0IiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.mE3N8dt086FlUyqXvmQs7uumaBxgRSq4ziw_qMPfS5o` }
    };
    const response = await axios.get("quest/" + questId, authorization);
    console.log(response)
}

export const deleteQuest = async (questId) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUyNTQ1MiwiZXhwIjoxNTk1NTI5MDUyLCJuYmYiOjE1OTU1MjU0NTIsImp0aSI6IjJOeUljSHNjTWJvdDR3S0IiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.mE3N8dt086FlUyqXvmQs7uumaBxgRSq4ziw_qMPfS5o` }
    };
    const response = await axios.get("deleteQuest/" + questId, authorization)
}

export const addQuest = async (name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUyNTQ1MiwiZXhwIjoxNTk1NTI5MDUyLCJuYmYiOjE1OTU1MjU0NTIsImp0aSI6IjJOeUljSHNjTWJvdDR3S0IiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.mE3N8dt086FlUyqXvmQs7uumaBxgRSq4ziw_qMPfS5o`, 'Content-Type': 'multipart.form-data'}
    };
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel);
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);
    const response = await axios.post("addQuest", formData, authorization)
}

export const editQuest = async (questId, name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUyNTQ1MiwiZXhwIjoxNTk1NTI5MDUyLCJuYmYiOjE1OTU1MjU0NTIsImp0aSI6IjJOeUljSHNjTWJvdDR3S0IiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.mE3N8dt086FlUyqXvmQs7uumaBxgRSq4ziw_qMPfS5o`, 'Content-Type': 'multipart.form-data' }
    };
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel);
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);
    const response = await axios.post("editQuest/" + questId, formData, authorization)
}