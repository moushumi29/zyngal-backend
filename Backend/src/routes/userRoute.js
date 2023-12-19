const express = require("express");
const { signup, signin } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/try", async (req, res) => {
  res.status(200).json({
    message: "woow",
    data: {
      name: "Moushumi",
    },
  });
});

module.exports = router;
