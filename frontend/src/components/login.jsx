import {LoginAuth} from "../services/authServices"
import {useState} from "react";

const Login = ({onClose})=> {
    const [formData,setFormData] = useState({phone:"",password:""});
    const [userError,setUserError] = useState("")
    const handleChange=(e)=> {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try{
            const response = await LoginAuth(formData);
            console.log(response)
            if(response === "login successfull" || response ==="Already logged in") {
                alert(response);
                onClose();
                return
            }
            alert(response)
        } catch (error) {
            setUserError(error.message)
        }
    };
    
    return (
        <div>
            <form className="loginForm" onSubmit={handleSubmit}>
                {userError && (<p>{userError}</p>)}
                <h3>Login</h3>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" placeholder="Enter your Phone number" onChange={handleChange}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;


