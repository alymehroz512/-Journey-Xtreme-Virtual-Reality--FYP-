const express = require("express");
require("./db/config");
const userRoutes = require('./routes/UserRoute');
const bookingRoutes = require('./routes/BookingRoute');
const packageRoutes = require('./routes/PacakageRoute');
const BlogRoute = require('./routes/BlogRoute');
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials:true
    }
));
app.use(cookieParser());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'mustehsanali512@gmail.com', // Your Gmail email address
    pass: 'drrksfxslpxkymum' // Your Gmail password
  }
});
app.post('/send-email', (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'mustehsanali512@gmail.com', // Change this to your recipient email address
    subject: subject,
    text: `Email: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});



// Use routes from separate files
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/package', packageRoutes);
app.use('/api/blog', BlogRoute);



app.listen(5000);
