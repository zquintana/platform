const oddScorer = require('../../lib/scorers/oddScorer');
const {expect} = require('chai');

describe('odd scorer tests', () => {
    const streetName = '1234 abc dr';
    const driver = 'Timmy Jone';

    it('should qualify', () => {
        expect(oddScorer.qualifies({streetName, driversName: driver})).to.be.true;
    });
    it('should not qualify', () => {
        expect(oddScorer.qualifies({streetName: `${streetName}1`, driversName: driver})).to.be.false;
    });
    it('should increase the value to be 6', () => {
        expect(oddScorer.calculate({driversName: driver})).to.eq(6);
    });
});
