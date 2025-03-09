import Search from "../services/search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchComponent() {
    const [phoneNumber,setPhone] = useState('')
    const [data, setData] = useState("");

    const navigate = useNavigate()
    const handleChange = (e) =>{
        setPhone(e.target.value);
    }
    const handleServerData = (serverData)=> {
        setData(serverData);
        console.log(serverData)
        navigate("/search", {
            state: { searchData: serverData },
        });
    }
    const handleSubmit= async(e)=> {
        e.preventDefault();
            const queryParams = new URLSearchParams({
                phone:phoneNumber
            }).toString()
        try {
            const response = await Search(queryParams);
            if(response === "Token expired" || response ==="Login to use this feature") {
                alert(response)
                return
            }
            handleServerData(response);
            
        }
        catch(err) {
            console.log(err)
            alert("Something went wrong,",err);
        }
    }
    
    return(
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <span class="prefix">+91</span>
                <input type="text" name="phone" placeholder="Enter your phone number" onChange={handleChange} value={phoneNumber}></input>
                <button class="search-icon" type="submit">Q</button> 
            </form>
            
        </div>
    )
}
export default SearchComponent;