class Thermostat{
    constructor(temp){
      this._temp = temp;
    }
    get temperature(){
      this._tempC = 5/9 * (this._temp-32)
      return this._tempC;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp * 9.0/5 + 32;
    }
  }
  
  const thermos = new Thermostat(89); // Ajuste en escala Farenheit
  console.log(thermos);
  let temp = thermos.temperature; // 24.44 en Celsius
  console.log(temp);
  thermos.temperature = 45;
  temp = thermos.temperature; // 26 en Celsius
  console.log(temp);