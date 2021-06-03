const evenScorer = require('../../lib/scorers/evenScorer');
const {expect} = require('chai');

describe('even scorer tests', () => {
    const streetName = '123 abc dr';
    const driver = 'Timmy Jone';

    it('should qualify', () => {
        expect(evenScorer.qualifies({streetName, driversName: driver})).to.be.true;
    });
    it('should not qualify', () => {
        expect(evenScorer.qualifies({streetName: `${streetName}1`, driversName: driver})).to.be.false;
    });
    it('should increase the value to be 4.5', () => {
        expect(evenScorer.calculate({driversName: driver})).to.eq(4.5);
    });
});
