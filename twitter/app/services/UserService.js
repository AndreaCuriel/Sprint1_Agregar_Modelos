const User = require("../models/user"); //importar la clase User

// Crear la clase UserService con método estatico
class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio"); //intancia un obejto tipo User
  }
}

module.exports = UserService;
