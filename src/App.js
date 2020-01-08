import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

export function App() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [responseText, setResponseText] = useState(undefined);
    const [over18, setOver18] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post(`/api/sms-promotion`, { phoneNumber }, { timeout: 5000 })
      .then((response) => {
        setResponseText(response.data)
      }, (error) => {
        setResponseText(error.data)
      }); 
      }

    return (
      <div>
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <label>Please enter your phone number: </label>
            <input
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              required 
              placeholder="+357xxxxxxxx"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            /><br/>
            <input 
            type="checkbox" 
            name="over18" 
            required 
            value={over18} 
            onChange={e => setOver18(e.target.checked)}
            />
            I am over 18 <br/>
            <input 
            type="checkbox" 
            name="acceptedTerms" 
            required 
            value={acceptedTerms} 
            onChange={e => setAcceptedTerms(e.target.checked)}
            />
            I accept the terms and conditions <br/>
            <button type="submit">Submit</button>
          </form>
          <p>{responseText}</p>
        </header>
      </div>
    );
  }

export default App;
