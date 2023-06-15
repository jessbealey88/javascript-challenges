const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    it('Has an initial temperature of 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);

    });
    it('has an up method which increases the temparature', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22);
    });
    it('has a down method which decreases the temparature', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(19);
    });

    it('has a minimum possible temperature of 10', () => {
        const thermostat = new Thermostat();
        for(let i = 0; i < 15; i++){
        thermostat.down();
        };
        expect(thermostat.getTemperature()).toBe(10);
    });

    it('has a power saving mode which is on by default and has max temp of 25', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
        };  
        expect(thermostat.getTemperature()).toBe(25);  
        
    });
    it('power saving mode can be switched off, and the max temp is 32', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false)
        for (let i = 0 ; i < 15 ; i++) {
            thermostat.up();
        };  
        expect(thermostat.getTemperature()).toBe(32);  
        
    });
    it('has an reset method which resets temparature to 20', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    });
    it('has current energy usage method which states high when over 25', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 15 ; i++) {
            thermostat.up();
        };  
        expect(thermostat.getCurrentEnergyUsage()).toBe('High');
    });
    it('has current energy usage method which states low when under 18', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getCurrentEnergyUsage()).toBe('Low');
    });
    it('has current energy usage method which states medium when between 18 and 25', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getCurrentEnergyUsage()).toBe('Medium');
    });


});