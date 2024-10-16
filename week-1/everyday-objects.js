export class EverydayObject {
  constructor(name, purpose, material) {
    this.name = name;
    this.purpose = purpose;
    this.material = material;
  }

  getName() {
    return this.name;
  }

  getPurpose() {
    return this.purpose;
  }

  getMaterial() {
    return this.material;
  }

  describeObject() {
    return `The ${this.name} is used for ${this.purpose} and is made of ${this.material}.`;
  }
}
