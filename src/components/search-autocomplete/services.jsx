const baseUrl = 'https://dummyjson.com'

const getUsers = async () => {
    try{
        const response = await fetch(`${baseUrl}/users`);
        const data = await response.json();
        return data?.users;
    } catch(err){
        throw err;
    }
    
}

export {getUsers}