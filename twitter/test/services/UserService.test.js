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

  test("Requerimiento 3. Create static metodo updateUserUsername", () => {
    const user = UserService.create(1, "AndreaCuriel", "Andrea");
    UserService.updateUserUsername(user, "Andrea");
    expect(user.username).toBe("Andrea");
  });

  test("Requerimiento 4, Create a list with all users, metodo getAllUsernames", () => {
    const user1 = UserService.create(1, "AndreaCuriel1", "Andrea");
    const user2 = UserService.create(1, "AndreaCuriel2", "Andrea");
    const user3 = UserService.create(1, "AndreaCuriel3", "Andrea");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("AndreaCuriel1");
    expect(usernames).toContain("AndreaCuriel2");
    expect(usernames).toContain("AndreaCuriel3");
  });
});
