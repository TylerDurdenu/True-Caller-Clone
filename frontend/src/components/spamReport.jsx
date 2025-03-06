import { useState } from "react";
import Report from "../services/reportSpam";

function SpamReport(params) {
  if (!params.phone) {
    return (
      <div>
        <p>Some error occured </p>
      </div>
    );
  }
  const [formData, setFormData] = useState({
    name: "",
    reasons: "",
  });
  const [result, setResult] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      phone: params.phone,
      name: formData.name,
      reasons: formData.reasons,
    };
    console.log(data)
    try {
      const response = await Report(data);
      console.log(await response);
      setResult(response);
    } catch (err) {
      setResult("Some error occured while reporting");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="reasons"
          value={formData.reasons}
          placeholder="enter your reasons"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Report</button>
      </form>
      {result && (<p>{result}</p>)}
    </div>
  );
}

export default SpamReport;