const API_URL = import.meta.env.VITE_BACKEND_URL;

async function Report(data) {
    if(!(data.phone || data.name || data.reasons)) {
        return "No data given";
    }
    try {
        const response = await fetch(`${API_URL}/feature/report`,{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data),
            credentials:"include"
        })
        if(!response.ok) {
            throw new Error("Some error occured please try again later");
        }
        return response.json();
    }
    catch(err) {
        return err;
    }
}
export default Report;