class Thermostat {
    constructor(){
        this.temperature = 20;
        this.powerSavingMode = true;
    }

    getTemperature() {
        return this.temperature;
    };

    up(){
        if (this.powerSavingMode == true && this.temperature < 25){
            this.temperature ++;
        } else if (this.powerSavingMode == false && this.temperature < 32){
            this.temperature ++;
        };
    };

    down() {
        if (this.temperature > 10) {
          this.temperature--;
        }
    };

    setPowerSavingMode(value) {
        this.powerSavingMode = value;
    };

    reset() {
        this.temperature = 20;
    };

    getCurrentEnergyUsage() {
        if (this.temperature < 18) {
            return 'Low';
          } else if (this.temperature < 25){
            return 'Medium';
          } else {
            return 'High';
          };
    }
};

module.exports =  Thermostat;