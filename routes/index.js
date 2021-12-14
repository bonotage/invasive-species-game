const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

module.exports = router;
