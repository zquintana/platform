const {expect} = require('chai');
const ss = require('../lib/suitabilityScorer');
const evenScorer = require('../lib/scorers/evenScorer');

describe('Test suitability scorer', () => {
    describe('odd only case', () => {
        const streetName = '1234 abc dr';
        const driver = 'Timmy Jone';

        it('should equal 6', () => {
            expect(ss(streetName, driver)).to.eq(6);
        });
    });

    describe('even only case', () => {
        const streetName = '123 abc dr';
        const driver = 'Tim Joe';
        const evenScore = evenScorer.calculate({driversName: driver});

        it(`should equal ${evenScore}`, () => {
            expect(ss(streetName, driver)).to.eq(evenScore);
        });
    });

    describe('even with bonus', function () {
        const streetName = '123 abc dr';
        const driver = 'Timmy Jone';
        const evenScore = evenScorer.calculate({driversName: driver});

        it(`should be ${evenScore * 1.5}`, () => {
            expect(ss(streetName, driver)).to.eq(evenScore * 1.5);
        });
    });
});
