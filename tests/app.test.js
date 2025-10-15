const citationsAleatoire = require("../src/app");

test ("La fonction retourne une citation", () => {
    const result = citationsAleatoire();
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
}) ;

// Pour exécuter ce test, utilisez la commande : npx jest tests/app.test.js
// Assurez-vous que Jest est installé dans votre projet : npm install --save-dev jest