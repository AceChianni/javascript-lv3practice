export class Weather {
  constructor(city, temperature, condition) {
    this.city = city;
    this.temperature = temperature;
    this.condition = condition;
  }

  getCity() {
    return this.city;
  }

  getTemperature() {
    return this.temperature;
  }

  getCondition() {
    return this.condition;
  }

  describeWeather() {
    return `The weather in ${this.city} is ${this.condition} with a temperature of ${this.temperature}°C.`;
  }
}
