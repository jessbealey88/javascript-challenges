const Weather = require('./weather');

describe('Weather', () => {
    it('', (done) => {
        const mockClient =  {
            fetchWeatherData: jest.fn(),
        };

        mockClient.fetchWeatherData.mockResolvedValueOnce({
            name: 'Paris',
            weather: [ { main: 'Clear', description: 'clear sky' } ],
            main: {
                temp: 23.53,
                feels_like: 23.09,
            },
        });

        const weather = new Weather(mockClient);
        weather.load('Paris').then(() => {
            expect(weather.getWeatherData().name).toEqual('Paris');
            expect(weather.getWeatherData().weather[0].description).toEqual('clear sky');
            done();
        });
    });
});