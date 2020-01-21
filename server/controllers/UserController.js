const User = require('../models/UserSchema');

module.exports = {
  create: async (req, res) => {
    try {
      const { userName } = req.body;
      const newUser = new User({ userName });

      await newUser.save();

      return res.json({
        message: 'User has been created',
        payload: newUser,
      });
    } catch (e) {
      console.log(e.message);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find();

      if (users.length === 0) {
        return res.json({
          message: 'No users found',
        })
      }

      return res.json({
        payload: users,
      });
    } catch (e) {
      console.log(e.message)
    }
  }
};
