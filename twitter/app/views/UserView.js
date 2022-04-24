const UserService = require("./../services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      ///1) if the value is null, send error
      console.log("Error es null");
      return { error: "El payload no existe." };
      ///2) ivalid properties
    } else if (
      typeof payload.username != "string" ||
      typeof payload.name != "string" ||
      typeof payload.id != "number"
    ) {
      return { error: "Necesitan tener un valor válido" };
    } else {
      return UserService.create(payload.id, payload.username, payload.name);
    }
  }
}

module.exports = UserView;
