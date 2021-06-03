// from https://stackoverflow.com/a/39246409/1072058
const gcd = (k, n) => k ? gcd(n % k, k) : n;
const qualifies = ({streetName, driversName}) => gcd(streetName.length, driversName.length) > 1;
const calculate = ({score}) => score * 1.5;

module.exports = {
    qualifies,
    calculate,
}