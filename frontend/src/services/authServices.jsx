const API_URL = import.meta.env.VITE_BACKEND_URL;

async function Signup(userData) {
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
        console.log("this is from service"+err.message);
        if(err.message ==="Failed to fetch") throw new Error("Internal server errror");
        throw new Error(err.message );
    }
}

async function LoginAuth(userData) {
    try {
        const response = await fetch(`${API_URL}/login`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(userData),
            credentials:'include'
        })
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data)
        }
        return data;

    }
    catch(err) {
        console.log(err.message);
        throw err;
    }
}
async function Logout() {
    try {
        const response = await fetch(`${API_URL}/logout`,{
            method:"POST",
            credentials:'include'
        })
        const data =await response.json()
        if(!response.ok) {
            throw new Error(data)
        }
        return data;
    }
    catch(err) {
        return data;
    }
}

export { LoginAuth, Signup, Logout};