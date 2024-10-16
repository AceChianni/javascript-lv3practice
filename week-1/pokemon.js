export class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getLevel() {
    return this.level;
  }

  levelUp() {
    this.level += 1;
  }

  describePokemon() {
    return `${this.name} is a ${this.type}-type Pokemon at level ${this.level}.`;
  }
}
