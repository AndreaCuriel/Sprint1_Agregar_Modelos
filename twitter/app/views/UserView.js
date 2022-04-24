const UserService = require("./../services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      ///if the value is null, send error
      console.log("Error es null");
      return { error: "El payload no existe." };
    }
  }
}

module.exports = UserView;
