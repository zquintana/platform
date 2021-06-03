const {scorers} = require('./scorers');

module.exports = (streetName, driversName) => {
    return scorers.reduce((score, scorer) => {
        if (!scorer.qualifies({streetName, driversName})) {
            return score
        }

        return scorer.calculate({driversName, score});
    }, 0);
}
