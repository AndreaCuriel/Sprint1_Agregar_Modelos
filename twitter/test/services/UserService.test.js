const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
  test(" Requerimiento 1. Create a new user using the Userservice", () => {
    const user = UserService.create(1, "AndreaCuriel", "Andrea");

    //Validar
    expect(user.username).toBe("AndreaCuriel");
    expect(user.name).toBe("Andrea");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });

  test("Requerimeinto 2. Create static metodo getInfo", () => {
    const user = UserService.create(1, "AndreaCuriel", "Andrea");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("AndreaCuriel");
    expect(userInfoInList[2]).toBe("Andrea");
    expect(userInfoInList[3]).toBe("Sin bio");
  });
});
