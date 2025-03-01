import { signup } from "../services/authServices";
import { useState } from "react";

const Register = () => {
    const [formData, setData] = useState({
        name: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!formData.name || !formData.phone || !formData.password || !formData.confirmPassword) {
            setError("All fields are required");
            return;
        }

        try {
            const response = await signup(formData);
            console.log(response);
            if(resp)
            alert("Registration successful!"); 
            setError(""); 
        } catch (err) {
            console.log(err.message)
            setError(err.message || "user exists use an alternative number"); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>} 
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Register;