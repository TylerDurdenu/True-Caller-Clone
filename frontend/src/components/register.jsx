import { Signup } from "../services/authServices";
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
            const response = await Signup(formData);
            console.log(response);
            alert("Registration successful!"); 
            setError(""); 
        } catch (err) {
            console.log(err.message)
            setError(err.message || "user exists use an alternative number"); 
        }
    };

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>} 
          <h3>Sign Up</h3>
            <label htmlFor="name"> Name </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="phone">Phone</label>
            <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <label htmlFor="password">Enter your password</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <label htmlFor="confirm">Confirm Password</label>
            <input
                type="password"
                name="confirmPassword"
                id="confirm"
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