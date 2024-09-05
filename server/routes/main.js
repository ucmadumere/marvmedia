const express = require("express");
const router = express.Router();

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

module.exports = router;
