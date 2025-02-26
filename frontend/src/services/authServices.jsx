const API_URL = import.meta.env.VITE_BACKEND_URL;

async function signup(userData) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("HTTP error");
        }
        return response.json();
    } catch (err) {
        console.log("Error during signup", err);
        throw err;
    }
}

async function login(userData) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData), 
        });
        if (!response.ok) {
            throw new Error("HTTP error");
        }
        return response.json();
    } catch (err) {
        console.log("Some error occured during login", err);
        throw err;
    }
}

export { login, signup };