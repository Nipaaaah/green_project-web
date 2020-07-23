import axios from '../tools/axios'

export const getAllQuests = async () => {
    //le token sera à mettre dans axios
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxNDAxMSwiZXhwIjoxNTk1NTE3NjExLCJuYmYiOjE1OTU1MTQwMTEsImp0aSI6IjY0QnpteGE3eUhacG5aSmoiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.UygDme63LLeUo0FogMEp_uKk8-7gdoj59ZfJx7KHZvo` }
    };
    const response = await axios.get("/allQuests", authorization);
    console.log(response)
}

export const getOneQuest = async (questId) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxNDAxMSwiZXhwIjoxNTk1NTE3NjExLCJuYmYiOjE1OTU1MTQwMTEsImp0aSI6IjY0QnpteGE3eUhacG5aSmoiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.UygDme63LLeUo0FogMEp_uKk8-7gdoj59ZfJx7KHZvo` }
    };
    const response = await axios.get("quest/" + questId, authorization);
    console.log(response)
}

export const deleteQuest = async (questId) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxNDAxMSwiZXhwIjoxNTk1NTE3NjExLCJuYmYiOjE1OTU1MTQwMTEsImp0aSI6IjY0QnpteGE3eUhacG5aSmoiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.UygDme63LLeUo0FogMEp_uKk8-7gdoj59ZfJx7KHZvo` }
    };
    const response = await axios.get("deleteQuest/" + questId, authorization)
}

export const addQuest = async (name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxNDAxMSwiZXhwIjoxNTk1NTE3NjExLCJuYmYiOjE1OTU1MTQwMTEsImp0aSI6IjY0QnpteGE3eUhacG5aSmoiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.UygDme63LLeUo0FogMEp_uKk8-7gdoj59ZfJx7KHZvo`, 'Content-Type': 'multipart.form-data'}
    };
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel);
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);
    const response = await axios.post("addQuest", form, authorization)
}

export const editQuest = async (questId, name, desc, expAmount, minLevel, timeForQuest, endDate) => {
    const authorization = {
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NTUxNDAxMSwiZXhwIjoxNTk1NTE3NjExLCJuYmYiOjE1OTU1MTQwMTEsImp0aSI6IjY0QnpteGE3eUhacG5aSmoiLCJzdWIiOjEsInBydiI6IjFiMmI3MzE0NzFhMjA0ZTRkYWY1MTRjYmJlYzNjZjhhNzk4OGU0YjMifQ.UygDme63LLeUo0FogMEp_uKk8-7gdoj59ZfJx7KHZvo`, 'Content-Type': 'multipart.form-data' }
    };
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('expAmount', expAmount);
    formData.append('minLevel', minLevel);
    formData.append('timeForQuest', timeForQuest);
    formData.append('endDate', endDate);
    const response = await axios.post("editQuest/" + questId, form, authorization)
}