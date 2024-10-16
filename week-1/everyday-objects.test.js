import { describe, beforeAll, test, expect } from "vitest";
import { EverydayObject } from "./everydayobjects.js";

describe("EverydayObject Class Tests", () => {
  let object;

  beforeAll(() => {
    object = new EverydayObject("Chair", "sitting", "wood");
  });

  test("should return the correct name", () => {
    expect(object.getName()).toBe("Chair");
  });

  test("should return the correct purpose", () => {
    expect(object.getPurpose()).toBe("sitting");
  });

  test("should return the correct material", () => {
    expect(object.getMaterial()).toBe("wood");
  });

  test("should return a correct description of the object", () => {
    expect(object.describeObject()).toBe("The Chair is used for sitting and is made of wood.");
  });
});
