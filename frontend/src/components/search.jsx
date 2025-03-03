import Search from "../services/search";
import { useState } from "react";
import SearchResults from "./searchResults";
function SearchComponent() {
    const [phoneNumber,setPhone] = useState('')
    const [data, setData] = useState("");

    const handleChange = (e) =>{
        setPhone(e.target.value);
    }
    const handleServerData = (serverData)=> {
        setData(serverData)
    }
    const handleSubmit= async(e)=> {
        e.preventDefault();
            const queryParams = new URLSearchParams({
                phone:phoneNumber
            }).toString()
        try {
            const response = await Search(queryParams);
            console.log(await response);
            handleServerData(response);
            return;
        }
        catch(err) {
            console.log(err)
            alert("Something went wrong,",err);
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} value={phoneNumber}></input>
            <button type="submit">Search</button>
        </form>
            {data && <div>
                    <SearchResults data= {data}/>
                </div>}
        </div>
    )
}
export default SearchComponent;