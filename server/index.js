const express = require('express');
const bodyParser = require('body-parser');

const accountSid = process.env['ACCOUNT_SID'];
const authToken = process.env['AUTH_TOKEN'];
const myPhoneNumber = process.env['MY_PHONE_NUMBER']

const client = require('twilio')(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/api/sms-promotion', (req, res) => {

  let bodyText = 'Hello! Your promocode is PM456'
  let phoneNumber = req.body.phoneNumber;
  let currentDateHour = new Date().getHours(); // Hours from 0 -> 23

  if (currentDateHour < 13) {
    bodyText = 'Good morning! Your promocode is AM123'
  }

  client.messages.create({
    to: phoneNumber,
    from: myPhoneNumber,
    body: bodyText
  }, function(error, message) {
    if (error) {
      res.send("Sorry, there was a problem: " + error.message);
    } else {
      res.send("Your promo code has been sent to your phone number!");
    }
  })

});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
