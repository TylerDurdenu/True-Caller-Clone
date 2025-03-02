import Search from "../services/search";
import { useState } from "react";

function SearchComponent() {
    const [phoneNumber,setPhone] = useState('')
   

    const handleChange = (e) =>{
        setPhone(e.target.value);
        console.log("Phone number changed to"+phoneNumber);
    }
    const handleSubmit= async(e)=> {
        try {
            e.preventDefault();
            const queryParams = new URLSearchParams({
                phone:phoneNumber
            }).toString()
            const response = await Search(queryParams);
            alert(await response)
        }
        catch(err) {
            alert("Something went wrong,",err);
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} value={phoneNumber}></input>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchComponent;