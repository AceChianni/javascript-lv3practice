import { describe, beforeAll, test, expect } from "vitest";
import { Pokemon } from "./pokemon.js";

describe("Pokemon Class Tests", () => {
  let pokemon;

  beforeAll(() => {
    pokemon = new Pokemon("Pikachu", "Electric", 10);
  });

  test("should return the correct name", () => {
    expect(pokemon.getName()).toBe("Pikachu");
  });

  test("should return the correct type", () => {
    expect(pokemon.getType()).toBe("Electric");
  });

  test("should return the correct level", () => {
    expect(pokemon.getLevel()).toBe(10);
  });

  test("should correctly level up the Pokemon", () => {
    pokemon.levelUp();
    expect(pokemon.getLevel()).toBe(11);
  });

  test("should return a correct description of the Pokemon", () => {
    expect(pokemon.describePokemon()).toBe("Pikachu is a Electric-type Pokemon at level 10.");
  });
});
