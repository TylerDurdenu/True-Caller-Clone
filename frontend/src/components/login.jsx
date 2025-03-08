import {LoginAuth} from "../services/authServices"
import {useState} from "react";

const Login = ()=> {
    const [formData,setFormData] = useState({phone:"",password:""});

    const handleChange=(e)=> {
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try{
            const response = await LoginAuth(formData);
            console.log(response)
            alert(response)
        } catch (error) {
            alert(error);
        }
    };
    
    return (
        <div>
            <form className="loginForm" onSubmit={handleSubmit}>
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


