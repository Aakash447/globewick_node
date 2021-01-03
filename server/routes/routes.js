const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer')

router.get("/about", (req, res) => {
  console.log(" in app.get  /about ");
  res.render("User/About/about");
});

router.get("/login", (req, res) => {
  console.log(" in app.get  /login ");
  res.render("User/Login/Login");
});

// POST route from contact form
router.post("/contact", (req, res) => {
    console.log('in contact route:',req.body)
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "in3.fcomet.com",
    port: 465,
    secure: true,
    auth: {
      user: 'aakashsharma@globewick.com',
      pass: 'aakash@98',
    },
  });

  // Specify what the email will look like
  const mailOpts = {
    from: req.body.email, // This is ignored by Gmail
    to: "aakashsharma@globewick.com",
    subject: req.body.subject,
    text: `name: ${req.body.name},\nemail:${req.body.email} ,\n\nmessage:   ${req.body.message}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
        res.json({
            message:"Email failed "
        }) // Show a page indicating failure
    } else {
        res.render("User/Home/index"); // Show a page indicating success
    }
  });
});

router.get("/", (req, res) => {
  console.log(" in app.get / ");
  res.render("User/Home/index");
});

module.exports = router;
