import { describe, beforeAll, test, expect } from "vitest";
import { Weather } from "./weather.js";

describe("Weather Class Tests", () => {
  let weather;

  beforeAll(() => {
    weather = new Weather("New York", 25, "sunny");
  });

  test("should return the correct city", () => {
    expect(weather.getCity()).toBe("New York");
  });

  test("should return the correct temperature", () => {
    expect(weather.getTemperature()).toBe(25);
  });

  test("should return the correct condition", () => {
    expect(weather.getCondition()).toBe("sunny");
  });

  test("should return a correct description of the weather", () => {
    expect(weather.describeWeather()).toBe("The weather in New York is sunny with a temperature of 25°C.");
  });
});
