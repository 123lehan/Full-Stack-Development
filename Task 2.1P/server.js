const express = require('express');
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const port = 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.post('/subscribe', (req, res) => {
    const userEmail = req.body.email;

    const msg = {
        to: userEmail,
        from: process.env.FROM_EMAIL,
        subject: 'Welcome to DEV@Deakin!',
        text: 'Thanks for subscribing to DEV@Deakin! We look forward to connecting with you.',
        html: '<h1>Welcome to DEV@Deakin!</h1><p>Thanks for subscribing to DEV@Deakin! We look forward to connecting with you.</p>',
    };

    sgMail.send(msg)
        .then(() => {
            res.send(" Welcome email sent successfully to " + userEmail);
        })
        .catch((error) => {
            console.error(error);
            res.send("Error sending email. Check the server logs.");
        });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
