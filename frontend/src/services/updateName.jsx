const API_URL = import.meta.env.VITE_BACKEND_URL;

async function UpdateName(data) {
    if(!(data.phone || data.name)) {
        return "Some error occured please try "
    }
    try {
        const response = await fetch(`${API_URL}/feature/updateName`, {
            method:"PATCH",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data),
            credentials:"include"
        })
        if(!response.ok) {
             throw new Error("SOME ERROR OCCURED PLEASE TRY AGAIN LATER");
        }
        return response.json();
    }
    catch(err) {
        return err.message;
    }
}
export default UpdateName;