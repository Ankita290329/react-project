import { useState } from 'react'
import axios from 'axios';

const Test = () => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        console.log('Logic App triggered with value:', inputValue);

        let data = {
            Name: inputValue
        }

        let url = "https://icici-poc-la.azurewebsites.net:443/api/Craetion-SP-Workflow-v3/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=2nDYSFX32SOkkM1qL1qCjmXz_V8XnvrrjibhIigKsV8"

        const fetchData = async () => {
            try {
                const response = await axios.post(url, data);
                console.log("logic app response", response);
                setInputValue('');

            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }

    return (
        <div>
            <h1>Enter the service principal name</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Test;