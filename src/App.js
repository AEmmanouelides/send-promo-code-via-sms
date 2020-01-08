import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

export function App() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [responseText, setResponseText] = useState(undefined);
    const [over18, setOver18] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
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
          <center><h3>Send Promotional Code Via SMS using Twilio</h3></center>
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
            <label>I am over 18</label><br/>
            <input 
              type="checkbox" 
              name="acceptedTerms" 
              required 
              value={acceptedTerms} 
              onChange={e => setAcceptedTerms(e.target.checked)}
            />
            <label>I accept the terms and conditions</label> <br/> <br/>
            <button type="submit">Submit</button>
          </form>
          <p>{responseText}</p>
        </header>
      </div>
    );
  }

export default App;
