const UserView = require("./../../app/views/UserView");

describe("Tests for UserView", () => {
  test("Return an error object when try to create a new user with an null payload", () => {
    const payload = null;
    const result = UserView.createUser(payload);
    //htpp://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/);
  });

  test("Return an error object when try to create a new user with a playload with invalid properties", () => {
    const payload = { username: null, name: 12, id: "id" };
    const result = UserView.createUser(payload);
    expect(result.error).toMatch(/Necesitan tener un valor válido/);
  });
});
