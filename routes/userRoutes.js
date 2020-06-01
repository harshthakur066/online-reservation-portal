const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/v1/user", async (req, res) => {
    try {
      const users = await User.find();

      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).send("Server Error");
    }
  });

  app.post("/api/v1/user", async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).send("Saved to database");
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
