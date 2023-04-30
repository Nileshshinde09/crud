const BASE_URL ="http://localhost:3000"
export const getUsers = async()=>{
    const response = await fetch(`${BASE_URL}/api/users`)
    const data = await response.json()
    return data;
}

export const getUser = async(userid)=>{
    const response = await fetch(`${BASE_URL}/api/users/${userid}`)
    const data = await response.json()
    if (data) return data
    return {};
}

export async function addUser(formData){
    try{
        const Options={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users`,Options)
        const json = await response.json()
        return json
    }
    catch(error){
        return error;
    }
}


export async function updateUser(userid,formData){
    try{
        const Options={
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users/${userid}`,Options)
        const json = await response.json()
        return json
    }
    catch(error){
        return error;
    }
}


export async function deleteUser(userid){
    try{
        const Options={
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
        }
        const response = await fetch(`${BASE_URL}/api/users/${userid}`,Options)
        const json = await response.json()
        return json
    }
    catch(error){
        return error;
    }
}

