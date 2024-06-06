const baseUrl = 'https://api.github.com';

const getUser = async (username) => {
    try{
        const response = await fetch(`${baseUrl}/users/${username}`);
        const data = await response.json();
        return data;
    } catch(err){
        throw err;
    }
    
}

export {getUser}