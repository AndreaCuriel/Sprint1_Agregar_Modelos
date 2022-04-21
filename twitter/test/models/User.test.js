const User = require("./../../app/models/User");

describe("Unit Test for User class", () => {
  test("Create User objet", () => {
    //Invocacion del código que vas a usar en tu app
    const user = new User(
      1,
      "AndreaCuriel",
      "Andrea",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    //Validaciones
    expect(user.id).toBe(1);
    expect(user.username).toBe("AndreaCuriel");
    expect(user.name).toBe("Andrea");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdate).toBe("lastUpdated");
  });
});
