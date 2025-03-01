const API_URL = import.meta.env.VITE_BACKEND_URL;

async function signup(userData) {
    try {
        const response = await fetch(`${API_URL}/register`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(userData)
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error("User already exists");
        }
        return data;
    }
    catch(err) {
        console.log(err.message);
        if(err.message ==="Failed to fetch") throw new Error("Internal server errror");
        throw new Error(err.message );
    }
}

async function login(userData) {
    try {
        const response = await fetch(`${API_URL}/login`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(userData)
        })
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.error)
        }
        return data;

    }
    catch(err) {
        console.log(err.message);
        throw err;
    }
}
export { login, signup };