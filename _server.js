const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/sendHireNotification', (req, res) => {
    const { pilotEmail, userName } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: pilotEmail,
        subject: 'New Hire Notification',
        text: `${userName} has hired you. Please check your profile for details.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
