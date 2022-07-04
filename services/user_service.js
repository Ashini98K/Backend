const User = require("../models/user_model");
const nodemailer = require("nodemailer");

//creating user
const createUser = async (req, res) => {
  if (req.body) {
    const user = new User(req.body);
    await user
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
        var subject = "Registration confimation";
        var message =
          "Temporary Password : " +
          req.body.password +
          "link to website : " +
          "wwww";
        sendMail(req.body.email, subject, message);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const sendMail = async (to, subject, message) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "ashini.kulatunga@gmail.com",
      pass: "pubnckyjtdikooft",
    },
  });

  var mailOptions = {
    from: "ashini.kulatunga@gmail.com",
    to: to,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

//updating the user table with the user type for the specific userId
const updateUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        mobile: req.body.mobile,
        status: req.body.status,
        password: req.body.password,
      },
    },
    { upsert: true }
    // function (err, result) {
    //   if (err) {
    //     res.send(err);
    //   } else {
    //     res.status(200).send(result);
    //   }
    // }
  )
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

module.exports = {
  createUser,
  updateUser,
};