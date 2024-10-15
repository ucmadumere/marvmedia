const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Routes
router.get("", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - Home",
  };

  res.render("index", locals);
});

router.get("/about", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - About",
  };
  res.render("about", locals);
});

router.get("/product", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - Products",
  };
  res.render("products", locals);
});

router.get("/gallery", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - Gallery",
  };
  res.render("gallery", locals);
});

router.get("/faq", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - FAQ",
  };
  res.render("faq", locals);
});

router.get("/contact", (req, res) => {
  const locals = {
    title: "OKOTI ENTERPRISES NIGERIA LIMITED - Contact",
  };
  res.render("contact", locals);
});

// New POST route for form submission
router.post("/submit-form", async (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email (set in .env)
      pass: process.env.EMAIL_PASS, // Your email password or app password (set in .env)
    },
  });

  // Email options
  const mailOptions = {
    from: email, // User's email
    to: "ugo10928@gmail.com", // The email address where you want to receive the form data
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Redirect to a success page or send a success message
    res.render("success", { message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).render("error", { message: "Failed to send email." });
  }
});
module.exports = router;
