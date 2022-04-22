const User = require("../models/user"); //importar la clase User

// Crear la clase UserService con método estatico
class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio"); //intancia un obejto tipo User
  }

  static getInfo(obj) {
    const arrayObj = [];
    arrayObj[0] = obj.id;
    arrayObj[1] = obj.username;
    arrayObj[2] = obj.name;
    arrayObj[3] = "Sin bio";

    return arrayObj;
  }

  static updateUserUsername(obj, newUsername) {
    return (obj.username = newUsername);
  }

  static getAllUsernames(array) {
    const allList = array.map((e) => e.username);
    return allList;
  }
}

module.exports = UserService;
