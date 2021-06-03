const ss = require('./suitabilityScorer')
const streetNameFilter = require('./streetNameFilter');

module.exports = (addresses, names) => {
    const drivers = names.map((name) => addresses.map((address) => ({
        name,
        address,
        score: ss(streetNameFilter(address), name),
    })).sort((a, b) => b.score - a.score));

    return addresses.map((address) => {
        const driver = drivers.reduce((bestDriver, testDriver) => {
            const matchingAddress = testDriver.filter((item) => item.address === address)[0];
            if (!matchingAddress) {
                return bestDriver;
            }

            if (!bestDriver) {
                return matchingAddress;
            }

            return bestDriver.score > matchingAddress.score ? bestDriver : matchingAddress;
        }, null);

        // there's probably a better way to do this.
        const driverIndex = names.indexOf(driver.name);
        drivers.splice(driverIndex, 1);
        names.splice(driverIndex, 1);

        return {
            address,
            driver,
        }
    });
}
