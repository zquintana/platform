const bonusScorer = require('../../lib/scorers/bonusScorer');
const {expect} = require('chai');

describe('bonus scorer tests', () => {
    const streetName = '123 abc dr';
    const driver = 'Timmy Jone';
    const score = 8;

    it('should qualify', () => {
       expect(bonusScorer.qualifies({streetName, driversName: driver})).to.be.true;
    });
    it('should not qualify', () => {
        expect(bonusScorer.qualifies({streetName, driversName: `${driver}1`})).to.be.false;
    });
    it('should increase the value to 12', () => {
        expect(bonusScorer.calculate({score})).to.eq(12);
    });
});
