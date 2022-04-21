const UserService = require("./../../app/services/UserService");

describe("Test for UserService", () => {
  test("1. Create a new user using the Userservice", () => {
    const user = UserService.create(1, "AndreaCuriel", "Andrea");

    //Validar
    expect(user.username).toBe("AndreaCuriel");
    expect(user.name).toBe("Andrea");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
});
