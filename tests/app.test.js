const citationsAleatoire = require("../src/app");

test ("La fonction retourne une citation", () => {
    const result = citationsAleatoire();
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
}) ;