const User = require('../models/User');

module.exports = {
  async register(request, response) {
    const { email, senha } = request.body;

    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).send("Usuário existente.");
    }

    user = await User.create(request.body);

    console.log(request.body);
    return response.json(user);
  },

  async authenticate(request, response) {
    const { email, senha } = request.body;

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(400).json({ error: "User not found." });
    }
    const senhaConfere = await user.compareHash(senha);
    if (!senhaConfere) {
      return response.status(400).json({ error: "Invalid password" });
    }

    return response.json({
      user,
      token: user.generateToken()
    });

  },
  
};
