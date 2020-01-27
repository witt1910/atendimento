const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  },
  senha: {
    type: String,
    required: true,

  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function hashSenha(next) {
  if (!this.isModified("senha")) next();

  this.senha = await bcrypt.hash(this.senha, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.senha);
  },

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", {
      expiresIn: 86400
    });
  }

}

module.exports = mongoose.model('User', UserSchema);