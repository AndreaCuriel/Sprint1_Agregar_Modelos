const User = require("./../../app/models/User");

describe("Unit Test for User class", () => {
  test("Create User objet", () => {
    //Invocacion del código que vas a usar en tu app
    const user = new User(1, "AndreaCuriel", "Andrea", "Bio");

    //Validaciones
    expect(user.id).toBe(1);
    expect(user.username).toBe("AndreaCuriel");
    expect(user.name).toBe("Andrea");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined(); // verifica que el valor no sea indefine
    expect(user.lastUpdate).not.toBeUndefined();
  });

  //segundo Test para validar el requirimiento 2, los getters
  test("Llamando los getters", () => {
    const user = new User(1, "AndreaCuriel", "Andrea", "Bio");

    //Validando
    expect(user.getUsername).toBe("AndreaCuriel");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });

  //tercer test para valdiar el requerimeinto 3, los setter
  test("Llamando los setter", () => {
    const user = new User(1, "AndreaCuriel", "Andrea", "Bio");
    user.setUsername = "Curiel";
    expect(user.username).toBe("Curiel");

    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});
