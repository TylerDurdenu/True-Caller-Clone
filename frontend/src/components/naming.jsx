import {useState} from 'react';
import UpdateName from '../services/updateName';

function Naming({phone}) {
    const [userName,setUserName] = useState('');
    const [result, setResult] = useState(null);
    console.log(phone)
    if(!phone) {
        return (
        <div>
            <p>Some error occured please try again later</p>
        </div>);
    } 

    const handleChange = (e) => {
        setUserName(e.target.value);
        console.log(userName);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name:userName,
            phone:phone
        }
        console.log(data)
        try {
            const response = await UpdateName(data);
            console.log(await response);
            setResult(await response)
        }
        catch(err) {
            setResult("Some error")
        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1 id="nameHead">Suggest name</h1>
                <div className='updateName'>
                <input  type="text" name="name" placeholder="Suggest a better name" value={userName} onChange={handleChange} required></input>

                </div>
                <button className='namingBtn' type="submit">Submit</button>
            </form>
            { result && (
                <p id="suggestResult">{result}</p>
            )}
        </div>
    );
}
export default Naming;