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
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="phone" placeholder="Phone number" onChange={handleChange}></input>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;


