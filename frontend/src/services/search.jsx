const API_URL = import.meta.env.VITE_BACKEND_URL;


async function Search(queryParams) {
    try {
        const response = await fetch(`${API_URL}/feature/search?${queryParams}`,{
            method:"GET",
            credentials:"include"
        })
        const data = await response.json();
        
        if(!response.ok) {
            throw new Error(data);
        }
        return data;
    }
    
    catch(err) {
        return err.message;
    }
}
export default Search;