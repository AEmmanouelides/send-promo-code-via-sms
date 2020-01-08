## Send Promotional Code via SMS - Coding Challenge 

This project was generated initially with the [Create React App] - Getting Started tool. (https://github.com/facebookincubator/create-react-app). 

Then an Express server was added in the `server` directory. 

The server is proxied via the `proxy` key in `package.json`.

## About the App

The coding challenge was implemented with [NodeJS] and [ReactJS].

For sending SMS, `Twilio` - [https://www.twilio.com/] platform was used for easy integration.

The `Twilio` - [AccountSid], [AuthToken] and [SendersPhoneNumber] were all saved in the `.env` file as environment variables for security reasons.

[****IMPORTANT-NOTE****] - If you send messages while in Twilio trial mode, 
you must first verify your 'To' phone number so Twilio knows you own it. 
If you attempt to send an SMS from your trial account to an unverified number, the API will return Error 21219.
You can verify your phone number by adding it to your Verified Caller IDs in the Twilio console.

## Running the App

You can start the server on its own with the command:

```bash
`npm run server`
```

Run the React application on its own with the command:

```bash
`npm start`
```

Run both applications together with the command:

```bash
`npm run dev`
```

The application will run on port 3000 and the server on port 3001.

`Screenshots` of the running App can be found at `/screenshots`

## Requirements 

Backend Scenario
------------------------

XCompany has decided to give a bonus coupon that can be redeemed for free deposit. 
However, to stop abuse we want to provide the bonus code only in exchange for an telephone number, sending the code in an SMS message.

The task is to create a REST API endpoint that receives a phone number and sends an SMS.

The endpoint should be available at ‘/api/sms-promotion’. 

The request body will consist of a single field, “phone”. 

You should then send an SMS to the provided phone number, with one of two messages:
- If the current server time is in the morning, the message should read “Good morning! Your promocode is AM123”. 
- If the current server time is in the afternoon or later, the message should read “Hello! Your promocode is PM456”.


The API should return a suitable HTTP response, including handling errors appropriately.
 

Frontend Scenario
-------------------------

Your task is to create a simple form for sending the above SMS code, collecting the phone number and passing it to the endpoint. 

However, our legal team has insisted that before the form is submitted, we have two checkboxes which must be checked. 
- “I am over 18” and 
- “I accept the terms and conditions”. 

There is no need for any styling.
