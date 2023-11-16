const { validate } = require("webpack");
const { generateText, validateInput } = require("../util.js");

describe("Test Función generateText", () => {
  test("Salida Nombre y edad", () => {
    const text = generateText("Marcela", 25);
    expect(text).toBe("Marcela (25 years old)");
  });

  test("Salida nombre vacío", () => {
    const text = generateText("", 25);
    expect(text).toBe(" (25 years old)");
  });

  test("Salida nombre null", () => {
    const text = generateText(null, 25);
    expect(text).toBe("null (25 years old)");
  });

  test("Salida edad vacío", () => {
    const text = generateText("Juan", "");
    expect(text).toBe("Juan ( years old)");
  });

  test("Salida edad null", () => {
    const text = generateText("Jose", null);
    expect(text).toBe("Jose (null years old)");
  });
});

describe("Test función validateInput", () => {
  test("Validacion nombre positivo", () => {
    const text = "Juan";
    expect(validateInput(text, true, false)).toBe(true);
  });

  test("Validacion nombre vacío", () => {
    const text = "";
    expect(validateInput(text, true, false)).toBe(false);
  });
});
