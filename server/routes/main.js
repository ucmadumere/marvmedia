const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
  const locals = {
    title: "MarveHome",
  };

  res.render("index", locals);
});

router.get("/about", (req, res) => {
  const locals = {
    title: "MarveHome about",
  };
  res.render("about", locals);
});

router.get("/product", (req, res) => {
    const locals = {
      title: "Products",
    };
    res.render("products", locals);
  });

  router.get("/gallery", (req, res) => {
    const locals = {
      title: "MarveHome about",
    };
    res.render("gallery", locals);
  });

  router.get("/faq", (req, res) => {
    const locals = {
      title: "MarveHome about",
    };
    res.render("faq", locals);
  });

  router.get("/contact", (req, res) => {
    const locals = {
      title: "MarveHome - Contact",
    };
    res.render("contact", locals);
  });

module.exports = router;
