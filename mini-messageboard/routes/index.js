const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Merhaba!",
    user: "kivanc",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Lorem",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  if (!messageUser || !messageText) {
    return res.render("form", { error: "Please fill in both fields." });
  }

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
